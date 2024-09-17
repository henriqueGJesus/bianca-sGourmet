
import { defineStore } from 'pinia';
import axios from 'axios';

export const useConectStore = defineStore('conectStore', {
  state: () => ({
    comments: [],
    url: "http://localhost:8000"
  }),

  actions: {
    async getComments(postUrl) {
      try {
       let teste = {
          post: postUrl
        }
        console.log(teste)
        const response = await axios.post(this.url+'/sortear',teste,{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.comments = response.data.comments || [];
        console.log(response.data)
      } catch (error) {
        console.error("Erro ao buscar os comentários:", error);
      }
    }
  }
});
