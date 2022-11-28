function tabuada(){
    let numeroEntrada = parseFloat(document.getElementById("Num1").value);
    let numeroMultInicial = parseFloat(document.getElementById("Num2").value);
    let numeroMultFinal = parseFloat(document.getElementById("Num3").value);

    if (numeroMultInicial>= numeroMultFinal){
        alert("erro");
    }
    if (numeroMultInicial<numeroMultFinal){
        for (let i=numeroMultInicial; i<= numeroMultFinal; i++) {

            let resposta = numeroEntrada*i;
            
            console.log(resposta);
            let listaresp = []
            listaresp.push(resposta)
            document.getElementById("resposta").innerHTML+="</br>"+(numeroEntrada+"x"+i)+" = "+listaresp;
        }

    }
}


function reforma(){

    let altazulejo = parseInt(document.getElementById("altazulejo").value);
    let largazulejo = parseInt(document.getElementById("largazulejo").value);
    let altparede = parseInt(document.getElementById("altparede").value);
    let largparede = parseInt(document.getElementById("largparede").value);

    let a = largparede/largazulejo;
    let b =  altparede/altazulejo;
    let resultado = a*b+(a*b*0.05);
    console.log(resultado);
    document.getElementById("respostaReforma").value = resultado;
}


function pi(){

    let limite= parseInt(document.getElementById("nmrInput").value)
    for(i=1; i<=limite; i++){
        if(i%3==0){
            let resultado = i+" pi";
           
            document.getElementById("divresposta").innerHTML += resultado+'</br>'
        }
        else{
            let resultado = i+"-"
            
            document.getElementById("divresposta").innerHTML += resultado+'</br>'
        }
    }
}


function palindromo(){
    let palindromo= String(document.getElementById('numeroPalindromo').value);
    
    for(var i = 0, j = palindromo.length - 1; i < palindromo.length; i++, j--) {
        if (palindromo[i] !== palindromo[j]){
            document.getElementById('respostaPalindromo').innerHTML= "o numero não é um palindromo"
        }
        else{
            document.getElementById('respostaPalindromo').innerHTML= "o numero é um palindromo"
        }
      }
}