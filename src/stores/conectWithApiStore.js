
import { defineStore } from 'pinia';
import axios from 'axios';

export const useConectStore = defineStore('conectStore', {
  state: () => ({
    comments: [],
    url: "http://localhost:8000"
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
