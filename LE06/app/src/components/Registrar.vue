<script setup>
import { ref } from "vue";

  let nome = ref("")
</script>

<template>
  <div id="pagina">
    <main>
      <div id="formulario-cadastro">
        <div class="form-header border-bottom">
          <a href="">
            <router-link to="/login">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </router-link>
          </a>
          <h4>
            Criar conta
          </h4> 
        </div>
        <form action="">
          <div class="mb-3" id="input-nome">
              <input type="nome" placeholder="Nome:" id="inputnome" class="form-control d-grid gap-2 col-6 mx-auto" aria-describedby="nomeHelpBlock">
              <div id="msnome" class="msn-invalido"></div>
          </div>
          <div class="mb-3" id="input-email">
              <input type="email" placeholder="Email:" id="inputemail" class="form-control d-grid gap-2 col-6 mx-auto" aria-describedby="emailHelpBlock">
              <div id="msgemail" class="msn-invalido"></div>
          </div>
          <div class="mb-3" id="input-senha">
              <input type="password" placeholder="Senha:" id="inputsenha" class="form-control d-grid gap-2 col-6 mx-auto" aria-describedby="passwordHelpBlock">
              <div id="mssenha" class="msn-invalido"></div>
          </div>
          <div class="mb-3" id="input-confimacao-senha">
              <input type="password" placeholder=" Confirme a senha:" id="inputsenhaconfimacao" class="form-control d-grid gap-2 col-6 mx-auto" aria-describedby="passwordHelpBlock">
              <div id="mssenha2" class="msn-invalido"></div>
          </div>

          <div class="mb-3" id="input-data">
            <div id="data-informacoes">
              <h6>Data de nascimento</h6>
              <span>Isso n??o ser?? exibito publicamente. Confirme sua pr??pria idade, mesmo se esta conta for de empresa, de um animal de estima????o ou outros.</span>
            </div>
            <div id="seleciona-container">
              <div id="seleciona-elemento-mes">
                <select id="mes" class="form-select" aria-label="Default select example">
                  <option selected>M??s</option>
                </select>
                <div id="mesHelp" class="msn-invalido"></div>
              </div>
    
              <div id="seleciona-elemento-dia">
                <select id="dia" class="form-select" aria-label="Default select example">
                  <option selected>Dia</option>
                </select>
                <div id="diaHelp" class="msn-invalido"></div>
              </div>
    
              <div id="seleciona-elemento-ano">
                <select id="ano" class="form-select" aria-label="Default select example">
                  <option selected>Ano</option>
                </select>
                <div id="anoHelp" class="msn-invalido"></div>
              </div>
            </div>
          </div>

            <div class="mb-3 formulario-check">
              <input type="checkbox" class="formulario-check-input" id="checkbox">
              <label class="formulario-check-label" for="checkbox">Receba emails sobre sua atividade no Tzeeter e recomenda????es.</label>
            </div>
            <div  class="border-bottom">
              <div id="termo-uso">
                  <span>
                    Voc?? concorda com nossos <a href="">Termos</a>, <a href="">Pol??tica de Privacidade</a> e com o uso de <a href="">Cookies</a>?
                  </span>
                  <div id="radio-checks">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                          Sim
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">
                        N??o
                      </label>
                    </div>
                  </div>
              </div>
            </div>
        </form>
        <div id="btn-criar" class="d-grid gap-2 col-6 mx-auto">
          <button id="btn-cadastrar" class="btn btn-primary" type="button">Criar conta</button>
        </div>
      </div>       
    </main>
  </div> 
</template>

<style>
  #pagina{
    height: 100vh;
    top: 100%;
    left: 100%;
  }

  #formulario-cadastro{
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: auto;
    background-color: whitesmoke;
    transform: translate(-50%, -50%);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  }

  #formulario-cadastro .form-header{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  #formulario-cadastro .form-header a{
    color: black;
    margin-left: 15px;
  }

  #formulario-cadastro .form-header h4{
    position: relative;
    top: 50%;
    left: 43%;
    transform: translate(-50%, 0%);
  }

  #input-nome input{
    width: 90%;
  }

  #input-email input{
    width: 90%;
  }

  #input-senha input{
    width: 90%;
  }

  #input-confimacao-senha input{
    width: 90%;
  }

  #data-informacoes{
    margin-left: 10px;
    margin-bottom: 10px;
  }

  #seleciona-container{
    display: flex;
    justify-content: space-evenly;
  }

  #seleciona-elemento-mes{
    width: 40%;
  }

  #seleciona-elemento-dia{
    width: 20%;
  }

  #seleciona-elemento-ano{
    width: 20%;
  }

  #checkbox{
    margin-left: 10px;
  }

  #termo-uso{
    margin-left: 10px;
  }

  #radio-checks{
    display: flex;
  }

  #radio-checks .form-check{
    margin: 10px;
  }

  #btn-criar{
    margin: 15px;
    width: 90%;
  }

  .msn-invalido{
    margin-left: 10px;
    color: red;
  }
</style>