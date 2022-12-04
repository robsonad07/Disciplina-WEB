<script setup> 
import { reactive, ref } from "vue";

  let textEmail = ref("");
  let textSenha = ref("");
  const state = reactive({ cond: 0 })

  function validaEmail(){
        let usuario = textEmail.value.substring(0, textEmail.value.indexOf("@"));
        let dominio = textEmail.value.substring(textEmail.value.indexOf("@")+1, textEmail.value.length);
        if((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            state.cond = 1;
            document.getElementById("msgemail").innerHTML="";
        }
        else{
            state.cond = -1;
            document.getElementById("msgemail").setAttribute("class", "msn-email-invalido")
            document.getElementById("msgemail").innerHTML="informe um email valido!";
        }
      }
</script>

<template>
  <div id="pagina">
    <main>
      <div id="formulario-login">
        <img src="../assets/tiziu.png" alt="logo Tzeet">
        <form >
            <div class="mb-3" id="input-email">
              <h5>Entre no Tzeet agora mesmo</h5>
              <input type="email" id="input-email-text" v-model="textEmail" @input="validaEmail" class="form-control d-grid gap-2 col-6 mx-auto"  :class="{'form\-control is\-valid d\-grid gap\-2 col\-6 mx\-auto' : state.cond == 1, 'form\-control is\-invalid d\-grid gap\-2 col\-6 mx\-auto' : state.cond == -1}" aria-describedby="emailHelp" placeholder="Email:">
              <div id="msgemail" class="msn-email-invalido"></div>
            </div>
            <div class="mb-3" id="input-senha">
              <input type="password" id="input-senha-text" v-model="textSenha" class="form-control d-grid gap-2 col-6 mx-auto" placeholder="Senha:">
              <a href="">Esqueceu a senha?</a>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto" id="botao-entrar">
              <button id="btn-config" :class="{'btn btn\-primary' : state.cond == 1, 'disabled btn btn\-primary': state.cond == 0 || state.cond == -1}" type="button">
                Entrar
              </button> 
            </div>
        </form>
        <div id="cadastrar-conta">
          <span>Não tem conta?</span>
          <router-link to="/registrar"> Inscreva-se </router-link>
        </div>    
      </div>
    </main>
  </div>
</template>

<style>

#pagina{
    width: 100%;
    height: 100vh;
    top: 100%;
    left: 100%;
}

#formulario-login{
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

#input-email h5{
    margin: 10px;
}

#input-email input{
    width: 90%;
}

#input-senha input{
    width: 90%;
}

#input-senha a{
    margin: 10px;
}

#formulario-login img{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    margin-top: 10px;
}

#botao-entrar{
    width: 90%;
    margin-top: 50px;
    margin-bottom: 15px;
}

#cadastrar-conta{
    margin: 10px;
}

.msn-email-invalido{
    margin-left: 15px;
    color: red;
}
</style>