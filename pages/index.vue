<template lang=""></template>
<script setup>
	import { useUserStore } from "~~/store/user";
	// const user = useUserStore();
	// if (process.client && localStorage.getItem("user")) {
	// 	user.local();
	// 	if (user.HasToken()) {
	// 		navigateTo("/home");
	// 	}
	// }
	definePageMeta({
		layout: "guest",
	});

	const { pending, data: category } = useFetch(
		"https://fakestoreapi.com/products/categories",
		{ lazy: true }
	);

</script>
<style lang=""></style>
