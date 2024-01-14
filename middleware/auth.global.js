import { useUserStore } from "/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
	const user = useUserStore();
	if (process.client && localStorage.getItem("user")) {
		user.local();
	}

	if (user.HasToken()) {
		switch (to.fullPath) {
			case "/":
				return navigateTo("/home");
			case "/login":
				return navigateTo("/home");

			case "/guest":
				return navigateTo("/home");

			case "/signup":
				return navigateTo("/home");
		}
	} else {
		switch (to.fullPath) {
			case "/home":
				return navigateTo("/guest");

			case "/cartinfo":
				return navigateTo("/guest");

			case "/about":
				return navigateTo("/guest");

			case "/products":
				return navigateTo("/guest");

			case "/category":
				return navigateTo("/guest");
		}
	}
});
