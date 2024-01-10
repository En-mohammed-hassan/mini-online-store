import { defineStore } from "pinia";
import { ref, watch } from "vue";
var user = { id: "", name: "", token: "" };

export const useUserStore = defineStore("user", {
	state: () => user,
	getters: {},
	actions: {
		push(id, name, token) {
			this.id = id;
			this.name = name;
			this.token = token;
		},
		local() {
			this.id = JSON.parse(localStorage.getItem("user")).id;
			this.name = JSON.parse(localStorage.getItem("user")).name;
			this.token = JSON.parse(localStorage.getItem("user")).token;
		},
		HasToken() {
			if (this.token == "") return false;
			else return true;
		},
		tolocal() {
			localStorage.setItem("user", JSON.stringify(this));
		},
		delete(){
			this.id=""
			this.name=""
			this.token=""
			localStorage.removeItem("user")

		}
	},
});
