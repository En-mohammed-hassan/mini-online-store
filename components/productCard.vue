<template>
	<div class="card text-center trans">
		<p class="mb-2 truncate">{{ product.title }}</p>
		<img class="thump" :src="product.image" alt="" />
		<nuxt-link :to="`/products/${product.id}`">
			<button class="btn mx-auto text-center mt-4">more details</button>
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
