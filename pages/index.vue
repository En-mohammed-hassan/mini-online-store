<template lang="">
	<div>
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
	const { data: category } = await useFetch(
		"https://fakestoreapi.com/products/categories"
	);
</script>
<style lang=""></style>
