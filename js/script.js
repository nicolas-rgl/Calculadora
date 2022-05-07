localStorage.setItem("valores", "");

let estado = parseInt(localStorage.getItem("estado"));

if (estado == 0) {
    document.getElementById("tela").style.backgroundColor = "#000000";
} else {
    document.getElementById("tela").style.backgroundColor = "#ffffff";
}

function energia() {
    
    const status = Number(document.getElementById("energia").value);
    const botao = document.getElementById("energia");
    
    if (status == 0) {
        document.getElementById("energia").value = 1;
        document.getElementById("tela").style.backgroundColor = "#ffffff";
        localStorage.setItem("estado", 1);
    } else {
        document.getElementById("energia").value = 0;
        document.getElementById("tela").style.backgroundColor = "#000000";
        localStorage.setItem("estado", 0);
    }


}

     function limpaTela(){
    document.getElementById("tela").innerHTML = "";
    localStorage.setItem("operacao", "");
    localStorage.setItem("valor", "");

     }

     function calcula(){
        const valores = localStorage.getItem("operacao");
        const resultado = eval(valores);
        document.getElementById("tela").innerHTML =  `<h4>${resultado}</h4>`;
        localStorage.setItem("operacao", resultado);
     }

function digito(digito) {
    
    switch(digito){
        case "ap":
            digito = "(";
            break;
        case "fp":
            digito = ")";
            break;
        case ",":
            digito = ".";
            break;
        default:
            digito = digito;
    }

    let valor = Array.from(localStorage.getItem("valor"));

    valor.push(digito); // push: pega o digito e coloca na array [] que estava vazia

    localStorage.setItem("valor", valor);
    
    let tela =  localStorage.getItem("valor").split(",");
    let lista_valores_tela=[];
    let valores_tela="";

tela.forEach(e => {
if(e != "") {
    lista_valores_tela.push(e);

}

})

for (let i=0; i<= lista_valores_tela.length; i++){
    valores_tela += lista_valores_tela[i];
}

valores_tela = valores_tela.split('undefined')[0];

localStorage.setItem("operacao", valores_tela);

document.getElementById("tela").innerHTML = `<h4>${valores_tela}</h4>`;
}