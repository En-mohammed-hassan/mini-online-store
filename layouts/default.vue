<template lang="">
	<div class="">
		<header class="shadow-xl bg-white">
			<nav class="container pt-1 mx-auto flex justify-between">
				<div class="flex">
					<Menu as="div" class="m-2 relative ml-3">
						<div>
							<MenuButton
								class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-800"
							>
								<span class="absolute -inset-1.5" />
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</MenuButton>
						</div>
						<transition
							enter-active-class="transition ease-out duration-100"
							enter-from-class="transform opacity-0 scale-95"
							enter-to-class="transform opacity-100 scale-100"
							leave-active-class="transition ease-in duration-75"
							leave-from-class="transform opacity-100 scale-100"
							leave-to-class="transform opacity-0 scale-95"
						>
							<MenuItems
								class="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							>
								<MenuItem @click="logout()" v-slot="{ active }">
									<p
										:class="[
											active ? 'bg-gray-100' : '',
											'block px-4 py-2 text-sm text-gray-700 cursor-pointer',
										]"
									>
										Sign out
									</p>
								</MenuItem>
							</MenuItems>
						</transition>
					</Menu>
				</div>

				<div class="flex w-fit m-auto"></div>

				<button @click="showlist()" class="sm:hidden">
					<span class="material-icons text-4xl">list</span>
				</button>
				<ul class="gap-4 hidden sm:flex mt-2">
					<li>
						<nuxt-link to="/cartinfo">
							<i class="material-icons mr-2">add_shopping_cart</i>
						</nuxt-link>
					</li>
					<li><nuxt-link to="/home">Home</nuxt-link></li>
					<li><nuxt-link to="/about">About</nuxt-link></li>
					<li>
						<nuxt-link class="btn" to="/products">All Products</nuxt-link>
					</li>
				</ul>
			</nav>
		</header>
		<div
			v-show="showLog"
			class="bg-gray-200 text-center transition duration-700 ease-in-out flex-auto"
		>
			<ul>
				<li class="mb-3 p-2 border-b border-sky-300 cursor-pointer">Logout</li>
			</ul>
		</div>
	</div>

	<div
		v-show="showList"
		class="bg-gray-200 text-center transition duration-700 ease-in-out"
	>
		<ul>
			<li class="mb-3 p-2 border-b border-sky-300">
				<nuxt-link to="/cartinfo">
					<i class="material-icons mr-2">add_shopping_cart</i>
					{{ Math.ceil(store.bill) }}</nuxt-link
				>
			</li>
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
				showList: false,
				showLog: false,
			};
		},
		methods: {
			showlist() {
				this.showList = !this.showList;
			},
			showlog() {
				this.showLog = !this.showLog;
				console.log(this.showLog);
			},
		},
	};
</script>
<script setup>
	import {
		Disclosure,
		DisclosureButton,
		DisclosurePanel,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
	} from "@headlessui/vue";
	import { useShopeStore } from "~~/store/shopCart";
	import { useUserStore } from "~~/store/user";
	const store = useShopeStore();
	const user = useUserStore();
	const logout = async () => {
		const { data: responseData } = await useFetch(
			"https://en-mhd-has.000webhostapp.com/api/logout",
			{
				headers: {
					accept: "*/*",
					Authorization: `Bearer{${user.token}}`,
				},
				method: "POST",
			}
		);
		console.log(responseData);
		user.delete();
		navigateTo("/login");
	};
</script>
<style scoped>
	.router-link-exact-active {
		color: #0ea5e9;
	}
</style>
