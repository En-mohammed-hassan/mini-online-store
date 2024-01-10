<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
<template>
	<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<div class="mx-auto h-10 w-auto text-center">
				<i
					class="material-icons text-sky-500 text-4xl text-center mx-auto h-10 w-auto"
					>person_add</i
				>
			</div>
			<h2
				class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
			>
				Sign Up to your account
			</h2>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form class="space-y-6" @submit.prevent="signIn">
				<div>
					<label
						for="username"
						class="block text-sm font-medium leading-6 text-gray-900"
						>Name</label
					>
					<div class="mt-2">
						<input
							@focus="error = null"
							id="username"
							name="username"
							type="text"
							autocomplete="username"
							required=""
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-gray-900"
						>Email address</label
					>
					<div class="mt-2">
						<input
							@focus="error = null"
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required=""
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-gray-900"
							>Password</label
						>
					</div>
					<div class="mt-2">
						<input
							@focus="error = null"
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required=""
							class="mb-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<label
						for="confirmPassword"
						class="block text-sm font-medium leading-6 text-gray-900"
						>Confirm Password</label
					>
					<div class="mt-2">
						<input
							@focus="error = null"
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							autocomplete="current-password"
							required=""
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="bg-sky-500 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sign Up
					</button>
				</div>
			</form>
		</div>
	</div>
	<div
		v-show="error"
		class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative sm:mx-auto sm:w-full sm:max-w-sm"
		role="alert"
	>
		{{ error }}
	</div>
</template>

<script setup>
	import { ref, computed } from "vue";
	const error = ref("");
	import { useUserStore } from "~~/store/user";
	const user = useUserStore();

	const signIn = async () => {
		const { data: responseData } = await useFetch(
			"https://en-mhd-has.000webhostapp.com/api/register",
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
					accept: "*/*",
				},
				method: "POST",

				body: new URLSearchParams({
					name: username.value,
					email: email.value,
					password: password.value,
					password_confirmation: confirmPassword.value,
				}),
			}
		);
		console.log(responseData);

		if (responseData.value !== null) {
			user.push(
				responseData.value.user.id,
				responseData.value.user.name,
				responseData.value.token
			);
			if (process.client) {
				user.tolocal();
			}
		} else {
			error.value = "The email has already been taken";
		}

		if (user.HasToken()) {
			navigateTo("/home");
		}
	};

	definePageMeta({
		layout: "guest",
	});
</script>
//

<style lang=""></style>
