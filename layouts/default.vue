<template lang="">
	<div class="">
		<header class="shadow-xl bg-white">
			<nav class="container pt-1 mx-auto flex justify-between">
				<button>
					<nuxt-link to="/">
						<i class="material-icons text-sky-400 text-5xl">home</i>
					</nuxt-link>
				</button>

				<button @click="showlist()" class="sm:hidden">
					<span class="material-icons text-4xl">list</span>
				</button>
				<ul class="gap-4 hidden sm:flex mt-2">
					<li><nuxt-link to="/">Home</nuxt-link></li>
					<li><nuxt-link to="/about">About</nuxt-link></li>
					<li>
						<nuxt-link class="btn" to="/products">All Products</nuxt-link>
					</li>
				</ul>
			</nav>
		</header>
	</div>
	<div
		v-show="show"
		class="bg-gray-200 text-center transition duration-700 ease-in-out"
	>
		<ul>
			<li class="mb-3 p-2 border-b border-sky-300">
				<nuxt-link @click="showlist()" to="/">Home</nuxt-link>
			</li>
			<li class="mb-3 p-2 border-b border-sky-300">
				<nuxt-link @click="showlist()" to="/about">About</nuxt-link>
			</li>
			<li class="mb-3 p-2 border-b border-sky-300">
				<nuxt-link @click="showlist()" class="" to="/products"
					>Products</nuxt-link
				>
			</li>
		</ul>
	</div>
	<div class="container mx-auto p-4">
		<slot />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				show: false,
			};
		},
		methods: {
			showlist() {
				this.show = !this.show;
				console.log(this.show);
			},
		},
	};
</script>
<style scoped>
	.router-link-exact-active {
		color: #0ea5e9;
	}
</style>
