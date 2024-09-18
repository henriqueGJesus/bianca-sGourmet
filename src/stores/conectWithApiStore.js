
import { defineStore } from 'pinia';
import axios from 'axios';

export const useConectStore = defineStore('conectStore', {
  state: () => ({
    comments: [],
    url: "https://bianca-s-gourmet-py-6p2c.vercel.app"
  }),

  actions: {
    async getComments(postUrl) {
  
       let teste = {
          post: postUrl
        }
        window.location.href = this.url + '/login';
    }
  }
});
