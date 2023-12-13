<template lang="">
	<div>
		<ul>
			<li>
				<div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
					<div v-for="p in products">
						<productCard :product="p" />
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup>
	const { category } = useRoute().params;
	const url = "https://fakestoreapi.com/products/category/" + category;
	const { data: products } = await useFetch(url, { key: "category" });
</script>
<style lang=""></style>
