const dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31];
const mes = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const anos = [
  1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929,
  1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939,
  1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949,
  1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
  1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
  1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2009,
  2020, 2021, 2022,
];

const mes1 = { Jan: "Jan", Mar: "Mar", Mai: "Mai", Jul: "Jul", Ago: "Ago", Out: "Out", Dez: "Dez" };
const mes2 = { Abr: "Abr", Jun: "Jun", Set: "Set", Nov: "Nov" };


class Cadastro{
    constructor(){
        this.inputNome = document.getElementById("inputnome");
        this.inputEmail = document.getElementById("inputemail");
        this.inputSenha = document.getElementById("inputsenha");
        this.inputSenha2 = document.getElementById("inputsenhaconfimacao");
        this.selecionaDia = document.getElementById("dia");
        this.selecionaMes = document.getElementById("mes");
        this.selecionaAno = document.getElementById("ano");
        this.checkSim = document.getElementById("flexRadioDefault1");
        this.checkNao = document.getElementById("flexRadioDefault2");
        this.btnCasatrar = document.getElementById("btn-cadastrar");

        this.validaBotao();
        this.filtro();

        this.inputNome.addEventListener("input", () => this.validaNome());
        this.inputEmail.addEventListener("input", () => this.validaEmail());
        this.inputSenha.addEventListener("input", () => this.validaSenha());
        this.inputSenha2.addEventListener("input", () => this.validaSenha2());
        this.selecionaDia.addEventListener("change", () => this.filtro());
        this.selecionaMes.addEventListener("change", () => this.filtro());
        this.selecionaAno.addEventListener("change", () => this.filtro());
        this.selecionaAno.addEventListener("click", () => this.validaAno());
        this.selecionaMes.addEventListener("click", () => this.validaMes());
        this.selecionaDia.addEventListener("click", () => this.validaDia());

        this.checkSim.addEventListener("input", () => this.validaBotao());
        this.checkNao.addEventListener("input", () => this.validaBotao());
        this.inputNome.addEventListener("input", () => this.validaBotao());
        this.inputEmail.addEventListener("input", () => this.validaBotao());
        this.inputSenha.addEventListener("input", () => this.validaBotao());
        this.inputSenha2.addEventListener("input", () => this.validaBotao());
        this.selecionaAno.addEventListener("click", () => this.validaBotao());
        this.selecionaMes.addEventListener("click", () => this.validaBotao());
        this.selecionaDia.addEventListener("click", () => this.validaBotao());
    }

    validaNome(){
        let texto = this.inputNome.value;
        if(texto == ""){
            this.inputNome.setAttribute("class", "form-control d-grid gap-2 col-6 mx-auto is-invalid");
            document.getElementById("msnome").innerHTML="informe um nome!";
            return false;
        }else{
            this.inputNome.setAttribute("class", "form-control d-grid gap-2 col-6 mx-auto is-valid");
            document.getElementById("msnome").innerHTML="";
            return true;
        }
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
            return true;
        }
        else{
            this.inputEmail.setAttribute("class", "form-control is-invalid d-grid gap-2 col-6 mx-auto");
            document.getElementById("msgemail").setAttribute("class", "msn-invalido");
            document.getElementById("msgemail").innerHTML="informe um email valido!";
            return false;
        }
    }

    validaSenha(){
        let senha = this.inputSenha.value.length;
        if(senha < 6){
            this.inputSenha.setAttribute("class", "form-control is-invalid d-grid gap-2 col-6 mx-auto");
            document.getElementById("mssenha").setAttribute("class", "msn-invalido");
            document.getElementById("mssenha").innerHTML="A senha é obrigatória e deve ter pelo menos 6 caracteres";
            return false;
        }else{
            this.inputSenha.setAttribute("class", "form-control is-valid d-grid gap-2 col-6 mx-auto");
            document.getElementById("mssenha").innerHTML="";
            return true;
        }
    }

    validaSenha2(){
        let senha = this.inputSenha.value;
        let senha2 = this.inputSenha2.value;
        
        if(senha === senha2 && senha2 >= 6){
            this.inputSenha2.setAttribute("class", "form-control is-valid d-grid gap-2 col-6 mx-auto");
            document.getElementById("mssenha2").innerHTML="";
            return true;
        }else{
            this.inputSenha2.setAttribute("class", "form-control is-invalid d-grid gap-2 col-6 mx-auto");
            document.getElementById("mssenha2").setAttribute("class", "msn-invalido");
            document.getElementById("mssenha2").innerHTML="A senha é obrigatória e deve ter pelo menos 6 caracteres";
            return false;
        }
    }

    ehBissexto(year){
        if((year%400 == 0) || (year%4==0 && year%100!=0)){
            return true;
        }else{
            return false;
        }
    }

    filtroDias(item){
        if(this.selecionaMes.options[this.selecionaMes.selectedIndex].text === "Fev") {
            if(this.ehBissexto(this.selecionaAno.options[this.selecionaAno.selectedIndex].value)) {
                if (item <= 29) return item;
            }else{
                if(item <= 28) return item;
          }
        }else if (mes2[this.selecionaMes.options[this.selecionaMes.selectedIndex].text]) {
            if (item <= 30) return item;
        }else if (mes1[this.selecionaMes.options[this.selecionaMes.selectedIndex].text]) {
            return item;
        }
    }

    filtro(){
        anos.forEach((item) => {
            const option = new Option(item, item);
            this.selecionaAno.options[this.selecionaAno.options.length] = option;
        });

        dias.filter((item) => this.filtroDias(item)).forEach((item) => {
          const option = new Option(item, item);
          this.selecionaDia.options[this.selecionaDia.options.length] = option;
        });

        mes.forEach((item) => {
            const option = new Option(item, item);
            this.selecionaMes.options[this.selecionaMes.options.length] = option;
        });
        
    }

    validaAno(){
        if(this.selecionaAno.options[this.selecionaAno.selectedIndex].value != "Ano"){
            this.selecionaAno.setAttribute("class", "form-select is-valid");
            document.getElementById("anoHelp").innerText = "";
            return true;
        }else{
            this.selecionaAno.setAttribute("class", "form-select is-invalid");
            document.getElementById("anoHelp").innerText = "Campo obrigatório";
            return false;
        }
    }

    validaMes(){
        if(this.selecionaMes.options[this.selecionaMes.selectedIndex].value != "Mês"){
            this.selecionaMes.setAttribute("class", "form-select is-valid");
            document.getElementById("mesHelp").innerText = "";
            return true;
        }else{
            this.selecionaMes.setAttribute("class", "form-select is-invalid");
            document.getElementById("mesHelp").innerText = "Campo obrigatório";
            return false;
        }
    }

    validaDia(){
        if(this.selecionaDia.options[this.selecionaDia.selectedIndex].value != "Dia"){
            this.selecionaDia.setAttribute("class", "form-select is-valid");
            document.getElementById("diaHelp").innerText = "";
            return true;
        }else{
            this.selecionaDia.setAttribute("class", "form-select is-invalid");
            document.getElementById("diaHelp").innerText = "Campo obrigatório";
            return false;
        }
    }

    validaPolica(){
        return this.checkSim.checked;
    }

    validaBotao(){
        if (
            this.validaNome() && this.validaEmail() && this.validaSenha() &&
            this.validaDia() && this.validaMes &&
            this.validaAno() && this.validaPolica()
          ) {
            this.btnCasatrar.removeAttribute("disabled");
          } else {
            this.btnCasatrar.setAttribute("disabled", "disabled");
          }

    }
}

window.onload = () =>{
    const cadastro = new Cadastro();
}
