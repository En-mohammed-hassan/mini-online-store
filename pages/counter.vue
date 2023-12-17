<template lang="">
	<div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-3">
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
	const { data: products } =  await useFetch(
		"https://fakestoreapi.com/products"
	);
</script>
<script>
	export default {
		data() {
			return {
				id: "",
			};
		},
	};
</script>
<style lang=""></style>
