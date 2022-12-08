$('#btnEsconder').on("click", esconder);
function esconder(){
    $('.escondeTexto').hide();
}

$('#btnMostrar').on("click", mostrar);
function mostrar(){
    $('.escondeTexto').show();
}

$('#btnColorir').on("click", colorir);

function colorir(){
    $('.escondeTexto').css("color", "red");
}


$('#btnDescolorir').on("click", descolorir);
function descolorir(){
    $('.escondeTexto').css("color", "black");
}


function rodandoDocumento() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("yagofrases").innerHTML = this.responseText;
    }
    xhttp.open("GET", "yago_frases");
    xhttp.send();
  }


const url_usuario = '/usuario';
const url_formacao = '/formacao'
const url_experiencia = '/experiencia'
const url_projetos = '/projetos'

fetch(url_usuario)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        let result= data;
        let saida= '';
        result.map(function(usuario) {
            saida+= `<h1>${usuario.nome}</h1>`
            saida+= `<h2 class="escondeTexto">${usuario.curso}</h2>`
            saida+= `<h3 class="escondeTexto">Endereço: ${usuario.endereco}</h3>`
            saida+= `<h3 class="escondeTexto">Email: ${usuario.email}</h3>`
            saida+= `<h3 class="escondeTexto">Telefone: ${usuario.telefone}</h3>`
            

        });
        document.getElementById('showuser').innerHTML= saida
        
    }).catch(function(error) {
        console.log(error);
});

fetch(url_formacao)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        let result= data;
        let saida= '';
        result.map(function(formacao) {
            saida+= `<h3>${formacao.Curso}| ${formacao.data_inicio}  - ${formacao.data_formacao}</h3>`
            saida+= `<h4>${formacao.descricao}</h4></br>`

            

        });
        document.getElementById('idformacao').innerHTML= saida
        
    }).catch(function(error) {
        console.log(error);
});

fetch(url_experiencia)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        let result= data;
        let saida= '';
        result.map(function(experiencia) {
            saida+= `<h3 aling="justify"> ${experiencia.Nome_Empresa} | ${experiencia.Cargo} | ${experiencia.Ano_Atuação}</h3>`
            saida+= `<h4>${experiencia.descricao}</h4></br>`

            

        });
        document.getElementById('idexperiencia').innerHTML= saida
        
    }).catch(function(error) {
        console.log(error);
});




fetch(url_projetos)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        let result= data;
        let saida= '';
        result.map(function(projetos) {
            saida+= `<h3>${projetos.nome} | ${projetos.data_inicio} - ${projetos.data_fim}`
            saida+= `<h4>${projetos.descrição}</h4>`
            saida+= `<a href="https://github.com/2022M1T6-inteli/Apex-Devs#readme" target="_blank"><button class="btn btn-1">Mostrar Projeto</button></a><br>`

            

        });
        document.getElementById('idprojetos').innerHTML= saida
        
    }).catch(function(error) {
        console.log(error);
});
  
  
