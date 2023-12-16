<template>
	<div class="card text-center trans">
		<p class="mb-2 max-w-[60%] m-auto truncate">
			{{ product.title }}
		</p>
		<p class="m-2">{{ product.price }} $</p>
		<img class="thump" :src="product.image" alt="" />
		<div class="flex justify-between">
			<button @click="store.Delete(product.id,product.price)" class="btn bg-red-400">
				Delete
			</button>
			<p>
				count
				<br />
				<span>{{ count }}</span>
			</p>
		</div>
	</div>
</template>
<script setup>
	const { product, count } = defineProps(["product", "count"]);
	import { useShopeStore } from "~~/store/shopCart";
	const store = useShopeStore();
</script>
<style scoped>
	.thump {
		height: 100px;
		margin: 0 auto;
	}
</style>
