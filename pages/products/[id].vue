<template lang="">
	<loading v-if="pending" />
	<div v-else>
		<description :product="product" />
	</div>
</template>
<script setup>
	const { id } = useRoute().params;
	const url = "https://fakestoreapi.com/products/" + id;
	const { pending, data: product } = await useFetch(
		url,
		{ key: "id" },
		{ lazy: true }
	);
</script>
<style lang=""></style>
