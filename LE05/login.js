
class Login{
    constructor(){
        this.inputEmail = document.getElementById("input-email-text");
        this.inputSenha = document.getElementById("input-senha-text");
        this.button = document.getElementById("btn-config");

        this.alteraBotao();

        this.inputEmail.addEventListener("input", () => this.validaEmail());
        this.inputSenha.addEventListener("input", () => this.validaSenha());
    }

    validaEmail(){
        let texto = this.inputEmail.value;
        let usuario = texto.substring(0, texto.indexOf("@"));
        let dominio = texto.substring(texto.indexOf("@")+1, texto.length);
        if((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            this.inputEmail.setAttribute("class", "form-control is-valid d-grid gap-2 col-6 mx-auto");
            document.getElementById("msgemail").innerHTML="";
        }
        else{
            this.inputEmail.setAttribute("class", "form-control is-invalid d-grid gap-2 col-6 mx-auto");
            document.getElementById("msgemail").setAttribute("class", "msn-email-invalido")
            document.getElementById("msgemail").innerHTML="informe um email valido!";
        }
        this.alteraBotao();
    }
    validaSenha(){
        if(this.inputSenha.value.length > 0){
            this.inputSenha.setAttribute("class", "form-control is-valid d-grid gap-2 col-6 mx-auto");
        }else{
            this.inputSenha.setAttribute("class", "form-control d-grid gap-2 col-6 mx-auto");
        }
        this.alteraBotao();
    }

    alteraBotao(){
        if((this.inputEmail.value.length > 0) && (this.inputSenha.value.length > 0)){
            this.button.removeAttribute("disabled");
        }else{
            this.button.setAttribute("disabled", "disabled");
        }
    }
}

window.onload = () =>{
    const login = new Login();
}
