<template lang="">
	<loading v-if="pending" />
	<div v-else class="grid lg:grid-cols-4 sm:grid-cols-2 gap-3">
		<div v-for="cart in store.cart">
			<cart
				:count="cart.count"
				:product="
					products.find(function (product, index) {
						if (product.id == cart.id) return true;
					})
				"
			/>
		</div>
	</div>
</template>
<script setup>
	import { useShopeStore } from "~~/store/shopCart";
	const store = useShopeStore();
	const { pending, data: products } = await useFetch(
		"https://fakestoreapi.com/products",
		{ lazy: true }
	);
</script>

<style lang=""></style>
