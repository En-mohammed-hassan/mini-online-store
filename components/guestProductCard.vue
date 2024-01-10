<template>
	<div class="card text-center trans">
		<p class="mb-2 max-w-xs m-auto truncate">{{ product.title }}</p>
		<img class="thump" :src="product.image" alt="" />
		<nuxt-link to="/login">
			<button class="btn mx-auto text-center mt-4">More info</button>
		</nuxt-link>
	</div>
</template>
<script setup>
	const { product } = defineProps(["product"]);
</script>
<style scoped>
	.thump {
		height: 150px;
		margin: 0 auto;
	}
</style>
