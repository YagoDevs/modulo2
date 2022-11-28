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
