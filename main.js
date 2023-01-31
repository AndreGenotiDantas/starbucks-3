let menu = document.querySelector("#meu-icon");
let navbar = document.querySelector(".navbar");

count = 0
aberto = false;

function clicou(){
    if(count === 0){
        navbar.style.top = "100%";
        count = 1
        aberto = true;
    }else{
        navbar.style.top = "-500px";
        count = 0
        aberto = false;
    }
}

function clicouLi(){
    navbar.style.top = "-500px";
}



