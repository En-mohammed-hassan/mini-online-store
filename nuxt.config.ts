// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	app: {
		head: {
			title: "nuxt-online-store",
			meta: [{ name: "description", content: "every thing about nuxt 3" }],
			link: [
				{
					rel: "StyleSheet",
					href: "https://fonts.googleapis.com/icon?family=Material+Icons",
				},
			],
		},
	},
});
