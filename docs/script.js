const gravidade = 10;
//correta
function lancvertical(){
    let velocidade = document.getElementById('velocidade').value;
    let tempo= parseFloat(velocidade/gravidade);
    console.log(tempo);
    let hmax= parseFloat((velocidade**2)/(gravidade*2));

    document.getElementById("tempo").value= tempo;
    document.getElementById("hmax").value= hmax;  

}



function pmaxmin(){
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    let resp= -(b/2*a);
    let resp2= -(b**2-4*a*c)/4*a;
    console.log(resp);
    console.log(resp2);
    document.getElementById("maxminy").value= resp;
    document.getElementById("maxminx").value= resp2;

};

//correta
function temperatura(){
    let c = parseFloat(document.getElementById('celsius').value);
    let resptemp = (9*c/5)+32;
    console.log(resptemp);
    document.getElementById('text').value = resptemp; 

};
//correta
function temperatura2(){
    let f = document.getElementById('fahrenheit').value;
    let resptemp2 = (5*(f-32))/9;
    console.log(resptemp2);
    document.getElementById('text2').value = resptemp2; 
    
};

//correta
function consuenergia(){
    let quantenergia = parseFloat(document.getElementById('consumidos').value);
    let vunitario = parseFloat(document.getElementById('unitario').value);
    if(quantenergia<=100) {
        let energia = quantenergia*vunitario;
        console.log(energia);
        document.getElementById('respconsumo').value = energia; 
    }
    else if(quantenergia>100 && quantenergia<=200) {
        let energia = quantenergia*(vunitario*1.25);
        console.log(energia);
        document.getElementById('respconsumo').value = energia; 
    }
    else {
        let energia = quantenergia*(vunitario*1.5);
        console.log(energia);
        document.getElementById('respconsumo').value = energia; 
    };
};