<script setup>
  defineProps({
    nome: String,
    user: String,
    descricao: String,
    cidade: String,
    data: String,
    tzeets: Number,
    followers: Number,
    following: Number
  });
</script>

<template>
  <div id="perfil">
    <div id="perfil-button">
      <img src="../assets/eu.jpg" class="rounded-circle" alt="Foto de perfil" height="64" width="64" />
      <button  type="button" class="btn btn-primary btn-sm">Edit profile</button>
    </div>

    <section id="info-usuario">
      <h4>{{nome}}</h4>
      <h5 class="nome-usuario">{{user}}</h5>
      <h5 class="descricao">{{descricao}}</h5>
    </section>
  </div> 
  <div id="info-perfil">
    <ul class="info-perfil-loc-data">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        <a href="#">{{cidade}}</a>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        <a href="#">{{data}}</a>
      </li>
    </ul>

    <ul class="info-perfil-estatic">
      <li class="info-perfil-item">
        <a href="#">
            <h5>{{tzeets}}</h5> 
            <p>tzeets</p>
        </a>
      </li>
      <li class="info-perfil-item">
        <a href="#">
          <h5>{{followers}}</h5>
          <p>followers</p>
        </a>
      </li>
      <li class="info-perfil-item">
        <a href="#">
          <h5>{{following}}</h5>
          <p>following</p>
        </a>
      </li>
    </ul>
  </div>
    <div id="feed-bloco">
      <ul id="feed-opcoes">
        <li class="feed-opcoes-item">
          <a href="#">Tzeets</a>
        </li>
        <li class="feed-opcoes-item">
          <a href="#">Tzeets & Replies</a>
        </li>
        <li class="feed-opcoes-item">
          <a href="#">Media</a>
        </li>
        <li class="feed-opcoes-item">
          <a href="#">Links</a>
        </li>
      </ul>
    </div>            
</template>

<style>
  #info-perfil .info-perfil-estatic{
    display: flex;
    padding: 5px 25px;
    
  }

  #perfil #perfil-button {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
  }

  #perfil #perfil-button button{
    height: 30px;
    border-radius: 15px;
  } 


  #info-perfil .info-perfil-estatic .info-perfil-item{
    margin-right: 10px;
  }

  #info-perfil .info-perfil-estatic .info-perfil-item a{
    display: flex;
    text-decoration: none;
  }

  #info-perfil .info-perfil-estatic .info-perfil-item a:hover{
    text-decoration: underline;
  }


  #info-perfil .info-perfil-estatic .info-perfil-item a h5{
    margin-right: 5px;
    color: rgb(15, 20, 25);
    font: bold;
  }

  #info-perfil .info-perfil-estatic .info-perfil-item p{
    color: rgb(83,100,113);
  }

  #perfil #info-usuario h4,
  #perfil #info-usuario .descricao{
    color: rgb(15, 20, 25);
  } 

  #perfil #info-usuario .nome-usuario{
    color: rgb(83,100,113);
  }

  #info-perfil .info-perfil-loc-data{
    display: flex;
    padding: 5px 25px;
    
  }

  #info-perfil .info-perfil-loc-data a{
    text-decoration: none;
    margin-right: 10px;
    color: rgb(83,100,113);
  }

  #feed-bloco #feed-opcoes{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #feed-bloco #feed-opcoes .feed-opcoes-item a:hover{
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.03);    
    border: 1px solid transparent;
  }


  #feed-bloco #feed-opcoes a{
    text-decoration: none;
    color: rgb(15, 20, 25);
    padding: 5px 10px;
    font: bold;
  }
</style>