<template lang="">
	<div class="text-center text-gray-400">
		<h3 class="text-3xl p-2">This is online store application</h3>
		<h3 class="text-3xl p-2">Email to log in is : mm@g.com</h3>
		<h3 class="text-3xl p-2">Password to log in is : 0000</h3>
		<h3 class="text-2xl p-2">
			Done by mohammed hasan for learning purposes using :
		</h3>
		<ul>
			<li>1-Nuxt 3 with pinia and tailwind.</li>
			<li>2-Fake Api for products.</li>
			<li>3-Real api for users and authenticating using laravel.</li>
		</ul>
		<p class="text-xl p-2"></p>
		<br />
		<span>Thank you for visiting </span> <br />
		<span>Email : en.mhd.has@gmail.com</span>
	</div>
</template>

<script setup>
	import { useUserStore } from "~~/store/user";
	definePageMeta({
		layout: "guest",
	});

	const { pending, data: category } = useFetch(
		"https://fakestoreapi.com/products/categories",
		{ lazy: true }
	);
</script>
<style lang=""></style>
