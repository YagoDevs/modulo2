function valorFuturo(){
    presente = parseFloat(document.getElementById("presente").value);
    duracao = parseFloat(document.getElementById("duracao").value);
    taxa = parseFloat(document.getElementById("taxa").value);

    resultado = presente * (1+ (taxa/100)) ** duracao;

    document.getElementById("resultado").innerHTML = resultado;
}

function valorPresente(){
    futuro = parseFloat(document.getElementById("futuro").value);
    duracao2 = parseFloat(document.getElementById("duracao2").value);
    taxa2 = parseFloat(document.getElementById("taxa2").value);

    resultado2 = futuro / (1 + (taxa2/100)) ** duracao2;

    document.getElementById("resultado2").innerHTML = resultado2;
}



function juros(){
    let capital = parseFloat(document.getElementById("capital").value);
    let i = parseFloat(document.getElementById("i").value)/100;
    let nAno = parseFloat(document.getElementById("nAno").value)/360;
    let montante = capital*(1+(i*nAno));
    document.getElementById("montante").innerHTML = montante
}

function binario(){
    let dec= document.getElementById("dec").value
    var binario = "";
    var temp = dec;
 
    while(temp > 0){
        if(temp % 2 == 0){
            binario = "0" + binario;
        }
        else {
            binario = "1" + binario;
        }

        temp = Math.floor(temp / 2);
    }

    document.getElementById("resultadobinario").innerHTML= 
    `<p>O numero decimal escolhido foi ${dec} e foi convertido para binário = ${binario}</p>`
    
}

function iMaluca() {
    let text = String(document.getElementById("text").value);
    textA = text.split("");
    for (let i = 0; i < textA.length; i++) {
      document.getElementById("imaluca").innerHTML += `<p style = "margin-left: ${i * 3}vw;">${textA[i]}</p>`;
    }
  }