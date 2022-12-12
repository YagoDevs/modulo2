function vpvf(){
    if(document.querySelector('input[name="valorfuturo"]:checked').value){
        let valorpresente = parseFloat(document.getElementById("vf").value);
        let i = parseFloat(document.getElementById("i").value)/100;
        let n = parseFloat(document.getElementById("n").value);
        let valorfuturo = valorpresente*(1+(i*n));
        console.log(valorpresente)
        console.log(i)
        console.log(n)
        console.log(valorfuturo)
        
        document.getElementById("resultado").innerHTML= valorfuturo
    }
    else if(document.querySelector('input[name="valorpresente"]:checked').value){
        let valorfuturo = parseFloat(document.getElementById("vp").value);
        let i = parseFloat(document.getElementById("i").value)/100;
        let n = parseFloat(document.getElementById("n").value);
        let valorpresente = valorfuturo/((1+i)^n);
        document.getElementById("resultado").innerHTML= valorpresente
    }
    else{
        alert("selecione um dos campos valor presente ou valor futuro")
    }
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