<template lang="">
	<loading v-if="pending" />

	<div v-else>
		<ul>
			<li>
				<div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
					<div v-for="cat in category">
						<categoryCard :category="cat" />
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup>
	const { pending, data: category } = useFetch(
		"https://fakestoreapi.com/products/categories",
		{ lazy: true }
	);
</script>
<style lang=""></style>
