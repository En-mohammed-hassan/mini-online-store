import { useUserStore } from "/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
	const user = useUserStore();
	if (process.client && localStorage.getItem("user")) {
		user.local();
	}
	console.log(`from ${from.fullPath}`);
	console.log(`from ${to.fullPath}`);

	// 	if (user.HasToken()) {
	// 		navigateTo("/home");
	// 	}
	// 	console.log("middleware");
	// } else {
	// 	console.log(console.log(":middleware2"));
	// }
	// if (to.fullPath == from.fullPath) {
	// 	console.log("helw");
	// 	return;
	// }

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
		// flag = true;
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
		// flag = true;
	}
	// if (flag) {
	// 	abortNavigation();
	// }
	// 	if (to.fullPath == from.fullPath && to.fullPath != "/") {
	// 		return navigateTo("/");
	// 	}
	// 	if (to.fullPath == "/" && !user.HasToken()) {
	// 		return;
	// 	}
	// 	if (to.fullPath == "/" && user.HasToken()) {
	// 		return abortNavigation();
	// 	}

	// 	if (from.fullPath == "/" && !user.HasToken()) {
	// 		return abortNavigation();
	// 	}
	// 	if (from.fullPath == "/" && user.HasToken()) {
	// // 	}
});
