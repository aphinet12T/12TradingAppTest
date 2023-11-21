import { defineStore } from "pinia";
import axios from "axios";

export const useStoresAddStore = defineStore("addStores", {
    state: () => ({
        name: '',
    }),
    actions: {
        setName(value) {
            this.name = value;
        },
        async addStore() {
            const data = {
                name : this.name,
            };
            try {
                
            } catch {
                console.error(error);
            }
        }
    },
  });