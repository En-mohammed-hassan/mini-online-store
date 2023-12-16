import { defineStore } from "pinia";
export default {};
export const useShopeStore = defineStore("shopstore", {
	state: () => ({ cart: [], bill: 0 }),
	getters: {
		// state() {
		// 	return this.state;
		// },
	},
	actions: {
		push(item, price) {
			if (this.cart.length == 0) {
				this.cart.push({ id: item, count: 1 });
				this.bill += price;
			} else {
				let i = 0;
				let found = false;
				for (i = 0; i < this.cart.length; i++) {
					if (this.cart[i].id === item) {
						found = true;
						var tarid = i;
						break;
					}
				}
				if (found) {
					this.cart[tarid].count += 1;
				} else {
					this.cart.push({ id: item, count: 1 });
				}

				this.bill += price;
			}
		},
		Delete(i, p) {
			this.bill -= p;

			var FOUND = this.cart.findIndex(function (post, index) {
				if (post.id == i) return true;
			});
			if (this.cart[FOUND].count == 1) {
				this.cart = this.cart.filter((e) => {
					return !e.id == i;
				});
				console.log("filter");
			} else {
				this.cart[FOUND].count -= 1;
			}

		},
	},
});
