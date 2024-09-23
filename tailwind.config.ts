import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				accent: {
					purple: "#9b72cb",
					blue: "#4285f4",
					pink: "#d96570"
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")]
};

export default config;
