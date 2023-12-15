<template>
	<div class="card text-center trans">
		<p class="mb-3 text-xl truncate">{{ category }}</p>
		<img class="thump" :src="`/images/${category}.jpg`" :alt="category" />
		<nuxt-link :to="`/category/${category}`">
			<button class="btn mx-auto text-center mt-4">show products</button>
		</nuxt-link>
	</div>
</template>
<script setup>
	const { category } = defineProps(["category"]);
</script>
<style scoped>
	.thump {
		height: 150px;
		margin: 0 auto;
	}
</style>
