<script setup>
  defineProps({
      img: String,
      nome: String,
      userName: String,
      data: String, 
      comentario: String,
      quantComentario: Number,
      quantShare: Number,
      curtidas: Number
    });
</script>

<template>
  <div class="tzeet-block border-top border-bottom">
    <div class="tzeet-usuario-info">
      <img v-bind:src="img" class="rounded-circle" alt="imagem do usuário" height="24" width="24">
      <p> {{nome}} </p>
      <a href="#">@{{userName}}</a>
      <span>{{data}}</span>
    </div>

  <p class="tzeet-conteudo">
      {{comentario}}
  </p>

  <ul class="acoes">
    <li class="acoes-item reply">
      <a href="#">
        <div class="conf-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
          </svg>
        </div>
        <p>{{quantComentario}}</p>
      </a>
    </li>

      <li class="acoes-item retzeet">
        <a href="#">
          <div class="conf-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
              <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
            </svg>
          </div>
          <p>{{quantShare}}</p>
        </a>  
      </li>

      <li class="acoes-item like">
        <a href="#">
          <div class="conf-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
            </svg>
          </div>
          <p>{{curtidas}}</p>
        </a>
      </li>

      <li class="acoes-item share">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
        </a>
      </li>
    </ul> 
  </div>
</template>

<style>
  .tzeet-block .acoes{
    display: flex;
    padding: 5px;
    justify-content: center;
  }

  .tzeet-block .acoes .acoes-item{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
  }
  .tzeet-block .acoes .acoes-item p{
    margin: 0;
    padding: 0;

  }

  .tzeet-block .acoes .acoes-item a{
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(83,100,113);
    text-decoration: none;
    padding: 5px 10px;
  }

  .tzeet-block .acoes .acoes-item .conf-icon{
    display: flex;
    padding: 5px 10px;
  }

  .tzeet-block .acoes .reply a:hover{
    color: rgba(29, 155, 240, 1);
  }

  .tzeet-block .acoes .reply .conf-icon:hover{
    border-radius: 20px;
    border: 1px solid transparent;
    background: rgba(29, 155, 240, 0.1);
  }

  .tzeet-block .acoes .retzeet a:hover{
    color: rgba(0, 186, 124, 1);
  }

  .tzeet-block .acoes .retzeet .conf-icon:hover{
    border-radius: 20px;
    border: 1px solid transparent;
    background: rgba(0, 186, 124, 0.1);
  }


  .tzeet-block .acoes .like a:hover{
    color: rgba(249, 24, 128, 1);
  }

  .tzeet-block .acoes .like .conf-icon:hover{
    border-radius: 20px;
    border: 1px solid transparent;
    background: rgba(249, 24, 128, 0.1);
  }

  .tzeet-block .acoes .acoes-item:last-child a:hover{
    border-radius: 20px;
    border: 1px solid transparent;
    background: rgba(29, 155, 240, 0.1);
    color: rgba(29, 155, 240, 1);
  }

  .tzeet-block{
    display: flex;
    flex-direction: column;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid transparent;
  }

  .tzeet-block:hover{
    background-color: rgba(0, 0, 0, 0.03);    
  }

  .tzeet-block .tzeet-usuario-info{
    display: flex;
    padding: 5px;
    justify-content: star;
  }

  .tzeet-block .tzeet-usuario-info p{
    color: rgb(15, 20, 25);
    margin-right: 5px;
    margin-left: 5px;
  }
  .tzeet-block .tzeet-usuario-info a{
    color: rgb(83, 100, 113); 
    text-decoration: none;
    margin-right: 5px;
  }

  .tzeet-block .tzeet-usuario-info span{
    color: rgb(83, 100, 113);
    margin-right: 5px;
  }

  .tzeet-block .tzeet-conteudo{
    padding: 5px;
    color: rgb(15, 20, 25);
  }

</style>