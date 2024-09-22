import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				accent: {
					purple: colors.purple[500],
					pink: colors.pink[400]
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
};

export default config;
