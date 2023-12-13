<template>
	<div class="card">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
			<div class="m-4">
				<div class="flex justify-between">
					<div class="flex btn w-fit">
						<i class="material-icons mr-2">add_shopping_cart</i>
						<span>Add to cart</span>
					</div>
					<nuxt-link class="flex btn w-fit" to="/">
						<i class="material-icons mr-2">arrow_back</i>
						Go Home
					</nuxt-link>
				</div>
				<h3 class="mx-auto py-5 mt-4 text-4xl">{{ product.title }}</h3>
				<span class="mx-auto mb-20 text-lg">Price : {{ product.price }} $</span>
				<p class="mx-auto border-b mt-4 py-5 text-3xl">product description</p>
				<p class="mx-auto text-lg">{{ product.description }}</p>
			</div>
			<div class="m-7">
				<img class="thump" :src="product.image" alt="" />
			</div>
		</div>
	</div>
</template>
<script setup>
	const { product } = defineProps(["product"]);
</script>
<style scoped>
	.thump {
		width: 500px;
	}
</style>
