/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		domains: ["naszsklep-api.vercel.app"], // Dodaj domenę hosta obrazu tutaj
	},
};

const withMDX = require("@next/mdx")();

module.exports = withMDX({
	...nextConfig, // Połącz konfiguracje z MDX z konfiguracją Next.js
	// Dodaj inne opcje konfiguracji, jeśli masz
});
