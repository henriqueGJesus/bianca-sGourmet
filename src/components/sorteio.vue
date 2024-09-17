
  
  <script setup>
  import { ref } from 'vue';
  import {useConectStore} from "../stores/conectWithApiStore.js"
  const instagramHandle = ref('');
  const postLink = ref('');
  const sorteado = ref(null);
  const conect = useConectStore();
  const sortearComentario = () => {
    const comentarios = ['Comentário 1', 'Comentário 2', 'Comentário 3', 'Comentário 4'];
    const indiceAleatorio = Math.floor(Math.random() * comentarios.length);
    sorteado.value = comentarios[indiceAleatorio];
    
    conect.getComments("https://www.instagram.com/p/C-OkdeTJjsZ/");

  }
  </script>
  <template>
    <div class="greetings">
      <h1 class="green">Sorteio de Comentários</h1>
  
      <div class="form-container">
        <label for="instagram-handle">Usuário do Instagram:</label>
        <input type="text" id="instagram-handle" v-model="instagramHandle" placeholder="@usuario">
  
        <label for="post-link">Link do Post:</label>
        <input type="text" id="post-link" v-model="postLink" placeholder="https://www.instagram.com/p/...">
  
        <button @click="sortearComentario" style="background-color:  rgb(189, 0, 164);">Sortear Comentário</button>
      </div>
  
      <div v-if="sorteado">
        <h3>O comentário sorteado foi:</h3>
        <p>{{ sorteado }}</p>
      </div>
    </div>
  </template>
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  label {
    font-weight: bold;
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.8rem 1.5rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>
  