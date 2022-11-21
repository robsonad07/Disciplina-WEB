<script setup>
  import ItemMenu from '../components/itemMenu.vue';
  import FormTzeet from '../components/FormTzeet.vue';
  import Tzeet from '../components/Tzeet.vue';
  import Sugestao from '../components/sugestao.vue'
  import imagem1 from '../assets/eu.jpg';
  import imagem2 from '../assets/person2.jpg';
  import imagem3 from '../assets/person1.jpg';
  import imagem4 from '../assets/person3.jpg';
</script>

<template>
  <div class="container-fluid row">
    <div class="col-sm-1 col-md-1 col-lg-3" id="menu-navegacao">
    <img src="../assets/tiziu.png"  alt="tziu bird image" />
    <ul id="menu-navegacao-lista">
      <router-link to="/">
        <ItemMenu
        d = "M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
        name = "Home"
      ></ItemMenu>
      </router-link>
      
      <ItemMenu
        d = "M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"
        name = "Explore"
      ></ItemMenu>
      <ItemMenu
        d = "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
        name = "Notifications"
      ></ItemMenu>
      <ItemMenu
        d = "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
        name = "Messages"
      ></ItemMenu>
      <ItemMenu
        d = "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
        name = "Bookmarks"
      ></ItemMenu>
      <router-link to="/profile">
        <ItemMenu
        d = "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
        name = "Profile"
      ></ItemMenu>
      </router-link>
      <ItemMenu
        d = "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        name = "More"
      ></ItemMenu>
    </ul>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Tweet</button>
    </div>
        <div class="bnt-oculto">
          <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
            </svg>
          </button>
      </div>
    </div>
    <main class="col-sm-9 col-md-9 col-lg-6 border-end border-start" id="home">
      <h2>Home</h2>
      <FormTzeet></FormTzeet>
      <Tzeet
      :img = imagem1
      nome = "Robson Amaral"
      userName = "robsonad07"
      data = "aug 17, 2022"
      comentario = "Que jogo incrivel!!!!!!"
      :quantComentario = 150
      :quantShare = 200
      :curtidas = 500
      ></Tzeet>
      <Tzeet
      :img = imagem2
      nome = "Felipe Oliveira"
      userName = "felipeOliveira"
      data = "out 25, 2022"
      comentario = "O que foi que acabou de acontecer????????????"
      :quantComentario = 300
      :quantShare = 50
      :curtidas = 400
      ></Tzeet>
    </main>
    <div class="col-3 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block" id="col-right">
        <form action="input">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <input type="text" placeholder="Username">
        </form>
        <div id="sugestao" >
            <p>Tavez você curta</p>
            <Sugestao
            :img= imagem2
            nome= "Felipe Oliveira"
            ></Sugestao>
            <Sugestao
            :img= imagem3
            nome= "Maria Juliana"
            ></Sugestao>
            <Sugestao
            :img= imagem4
            nome= "Carla Silva"
            ></Sugestao>
            <a href="">Mostrar mais</a>
        </div>
    </div>
  </div>
</template>

<style>
  * {
    margin: 0;
    border: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  body {
    display: flex;
    align-items: center;
    padding: 20px 25px;
    color: rgb(15, 20, 25);
    background-color: whitesmoke;
  }

  ol, ul {
    list-style: none;
    padding-left: 0;
  }
  #col-right form{
    background-color: rgb(239, 243, 244);
    border-radius: 20px;
    padding: 5px 10px;
  }
  #col-right input{
    background-color: rgb(239, 243, 244);
    border-radius: 20px;
    border: 0ch;
    padding: 5px 10px;
  }

  #col-right form svg{
    margin-right: 10px;
  }

  #col-right #sugestao{
    background-color: rgb(239, 243, 244);
    border-radius: 10px;
    padding: 5px 10px;
    margin-top: 10px;
  }

  #col-right #sugestao p{
    font: bold;
    font-size: x-large;
  }
</style>