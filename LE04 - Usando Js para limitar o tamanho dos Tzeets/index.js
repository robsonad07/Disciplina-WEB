

class Index{
    constructor(){
        this.spanContador = document.getElementById("contador");
        this.divTextArea = document.getElementById("area-de-entrada");
        this.btnEnviar = document.getElementById("bntEnviar");
        this.contadorVisibilidade();

        this.divTextArea.addEventListener("input", () => this.atualizaContador());
    }

    
    atualizaContador(){
        let texto = this.divTextArea.value.length;
        let temp = 140 - texto;
        this.spanContador.textContent = temp;
        //if(texto > 140){
            //this.divTextArea.value = this.divTextArea.value.substring(0, 140);
        //}
        this.mudarCor();
        this.contadorVisibilidade();
    }

    habilitarBnt(){
        this.btnEnviar.removeAttribute("disabled");
    }

    desabilitarBnt(){
        this.btnEnviar.setAttribute("disabled", "disabled");
    }

    contadorVisibilidade(){
        let texto = this.divTextArea.value.length;
        if(texto == 0){
            this.spanContador.setAttribute("class", "invisible");
            this.desabilitarBnt();
        }else if(texto > 0 && texto <= 140){
            this.spanContador.removeAttribute("invisible");
            this.habilitarBnt();
        }
        
    }
    mudarCor(){
        let texto = this.divTextArea.value.length;
        if((140 - texto) < 40 && (140 - texto) >= 0){
            this.spanContador.setAttribute("class", "contadorAmarelo");
            this.habilitarBnt();
        }
        else if((140 - texto) < 0){
            this.spanContador.setAttribute("class", "contadorVemelho");
            this.desabilitarBnt();
        }else{
            this.spanContador.setAttribute("class", "contadorPreto");
            this.habilitarBnt();
        }
        //setTimeout(() => this.contadorInvisivel(), 500);
    }
}

class IndexModal{
    constructor(){
        this.spanContador = document.getElementById("contador-modal");
        this.divTextArea = document.getElementById("area-de-entrada-modal");
        this.btnEnviar = document.getElementById("bntEnviar-modal");
        this.contadorVisibilidade();

        this.divTextArea.addEventListener("input", () => this.atualizaContador());
    }

    
    atualizaContador(){
        let texto = this.divTextArea.value.length;
        let temp = 140 - texto;
        this.spanContador.textContent = temp;
        //if(texto > 140){
            //this.divTextArea.value = this.divTextArea.value.substring(0, 140);
        //}
        this.mudarCor();
        this.contadorVisibilidade();
    }

    habilitarBnt(){
        this.btnEnviar.removeAttribute("disabled");
    }

    desabilitarBnt(){
        this.btnEnviar.setAttribute("disabled", "disabled");
    }

    contadorVisibilidade(){
        let texto = this.divTextArea.value.length;
        if(texto == 0){
            this.spanContador.setAttribute("class", "invisible");
            this.desabilitarBnt();
        }else if(texto > 0 && texto <= 140){
            this.spanContador.removeAttribute("invisible");
            this.habilitarBnt();
        }
        
    }
    mudarCor(){
        let texto = this.divTextArea.value.length;
        if((140 - texto) < 40 && (140 - texto) >= 0){
            this.spanContador.setAttribute("class", "contadorAmarelo");
            this.habilitarBnt();
        }
        else if((140 - texto) < 0){
            this.spanContador.setAttribute("class", "contadorVemelho");
            this.desabilitarBnt();
        }else{
            this.spanContador.setAttribute("class", "contadorPreto");
            this.habilitarBnt();
        }
        //setTimeout(() => this.contadorInvisivel(), 500);
    }
}

window.onload = () =>{
    const index = new Index();
    const indexModal = new IndexModal();
}