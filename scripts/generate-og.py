#!/usr/bin/env python3
"""
Generate an OpenGraph (OG) image for Ali Hamas's portfolio.
Emulates the 3D isometric perspective, lens depth-of-field (tilt-shift blur),
and soft ambient vignette inspired by colinlienard.com/public/og.jpg.
"""

import math
from pathlib import Path
from PIL import Image, ImageFilter

def solve_linear_system(A, b):
    """Gaussian elimination with partial pivoting."""
    n = len(b)
    M = [A[i] + [b[i]] for i in range(n)]
    for i in range(n):
        max_row = max(range(i, n), key=lambda r: abs(M[r][i]))
        M[i], M[max_row] = M[max_row], M[i]
        pivot = M[i][i]
        for j in range(i, n + 1):
            M[i][j] /= pivot
        for r in range(n):
            if r != i:
                factor = M[r][i]
                for j in range(i, n + 1):
                    M[r][j] -= factor * M[i][j]
    return [M[i][n] for i in range(n)]

def find_perspective_coeffs(src_pts, dst_pts):
    """Calculate 8 perspective coefficients mapping destination to source."""
    A, b = [], []
    for (xd, yd), (xs, ys) in zip(dst_pts, src_pts):
        A.append([xd, yd, 1, 0, 0, 0, -xd * xs, -yd * xs])
        b.append(xs)
        A.append([0, 0, 0, xd, yd, 1, -xd * ys, -yd * ys])
        b.append(ys)
    return solve_linear_system(A, b)

def generate_og(hero_path: Path, output_path: Path):
    # 1. Load hero and prepare feathered alpha mask at 2x supersampled resolution
    hero = Image.open(hero_path).convert('RGBA')
    hw_orig, hh_orig = hero.size
    hero = hero.resize((hw_orig * 2, hh_orig * 2), Image.Resampling.LANCZOS)
    hw, hh = hero.size

    alpha = Image.new('L', (hw, hh), 255)
    feather_x = 70
    feather_y = 60

    for y in range(hh):
        for x in range(hw):
            dx = min(x, hw - 1 - x)
            dy = min(y, hh - 1 - y)
            ax = min(1.0, dx / feather_x)
            ay = min(1.0, dy / feather_y)
            # Cubic smoothstep easing
            ax = ax * ax * (3 - 2 * ax)
            ay = ay * ay * (3 - 2 * ay)
            alpha.putpixel((x, y), int(255 * ax * ay))

    hero.putalpha(alpha)

    # 2. 2x Supersampled Destination Coordinates (2400 x 1260)
    dst_pts = [
        (480, 105),   # Top-left
        (1980, 65),   # Top-right
        (1860, 965),  # Bottom-right
        (635, 1135)   # Bottom-left
    ]
    src_pts = [(0, 0), (hw, 0), (hw, hh), (0, hh)]
    coeffs = find_perspective_coeffs(src_pts, dst_pts)

    # 3. Canvas at 2400 x 1260 with subtle warm studio vignette
    canvas = Image.new('RGBA', (2400, 1260), (250, 250, 250, 255))
    for y in range(1260):
        for x in range(2400):
            nx = (x - 1200) / 1200
            ny = (y - 630) / 630
            dist = math.sqrt(nx * nx + ny * ny)
            factor = min(1.0, dist)
            val = int(253 - 6 * (factor ** 2))
            canvas.putpixel((x, y), (val, val, int(val * 0.996), 255))

    # Warp hero
    warped_sharp = hero.transform((2400, 1260), Image.PERSPECTIVE, coeffs, Image.BICUBIC)

    # Composite sharp onto canvas
    sharp_composite = Image.alpha_composite(canvas, warped_sharp)

    # Optical camera blur
    blurred_composite = sharp_composite.filter(ImageFilter.GaussianBlur(radius=9.0))

    # 4. Sloped focus mask for tilt-shift depth-of-field
    focus_mask = Image.new('L', (2400, 1260), 0)
    for y in range(1260):
        for x in range(2400):
            y_focal = -0.038 * x + 440
            diff = y - y_focal
            if -50 <= diff <= 90:
                val = 0 # 100% sharp
            elif diff < -50:
                dist = (-50 - diff) / 320.0
                val = int(255 * min(1.0, (dist ** 1.3) * 0.95))
            else:
                dist = (diff - 90) / 700.0
                val = int(255 * min(1.0, (dist ** 1.25) * 0.98))
            focus_mask.putpixel((x, y), val)

    # Blend sharp and blurred
    blended_2x = Image.composite(blurred_composite, sharp_composite, focus_mask)

    # 5. Downscale to standard 1200 x 630 with high-quality Lanczos resampling
    final_1200 = blended_2x.resize((1200, 630), Image.Resampling.LANCZOS)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    final_1200.convert('RGB').save(output_path, 'JPEG', quality=96, optimize=True)
    print(f"Generated {output_path} ({final_1200.width}x{final_1200.height})")

if __name__ == '__main__':
    repo_root = Path(__file__).resolve().parent.parent
    hero_input = repo_root / 'scripts' / 'hero-capture.png'
    targets = [
        repo_root / 'src' / 'app' / 'opengraph-image.jpg',
        repo_root / 'src' / 'app' / 'twitter-image.jpg',
    ]
    for target in targets:
        generate_og(hero_input, target)
