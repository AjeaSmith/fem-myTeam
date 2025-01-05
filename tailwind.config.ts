import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					green: "#014E56",
					coral: "#F67E7E",
				},
				white: "#ffffff",
				secondary: {
					"green-400": "#79C8C7",
					"green-500": "#2C6269",
					"green-600": "#004047",
					"green-700": "#012F34",
					"green-900": "#002529",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
