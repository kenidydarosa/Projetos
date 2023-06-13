/*altera o formato de data dos campos */
function alteraFormato(campo) {
  var data = campo.value;

  if(data === ""){
     campo.type = "text";
     campo.value = campo.placeholder;
     return
  }

  var partes = data.split("-");
  var novaData = partes[2] + "-" + partes[1] + "-" + partes[0];
  return campo.innerText = novaData;
  // return campo.value = novaData;
}


//*************Pinta item selecionado **********/
var tabela = document.getElementById("tabelaProjetos");
var linhas = tabela.getElementsByTagName("tr");

for (var i = 0; i < linhas.length; i++) {
  var linha = linhas[i];
  linha.addEventListener("click", function () {
    selLinha(this, false);
    /**
Caso passe true, você pode selecionar multiplas linhas.
Caso passe false, você só pode selecionar uma linha por vez.
**/
  });
}

function selLinha(linha, multiplos) {
  if (!multiplos) {
    var linhas = linha.parentElement.getElementsByTagName("tr");
    for (var i = 0; i < linhas.length; i++) {
      var linha_ = linhas[i];
      linha_.classList.remove("selecionado");
    }
  }
  linha.classList.toggle("selecionado");
}

/**
Exemplo de como capturar os dados
**/
var btnVisualizar = document.getElementById("visualizarDados");
btnVisualizar.addEventListener("click", function () {
  var selecionados = tabela.getElementsByClassName("selecionado");
  //Verificar se eestá selecionado
  if (selecionados.length < 1) {
    alert("Selecione pelo menos uma linha");
    return false;
  }

  var dados = "";

  for (var i = 0; i < selecionados.length; i++) {
    var selecionado = selecionados[i];
    selecionado = selecionado.getElementsByTagName("td");
    dados +=
      "ID: " +
      selecionado[0].innerHTML +
      " - SV: " +
      selecionado[2].innerHTML +
      " - Nome: " +
      selecionado[3].innerHTML +
      " - Dimensões: " +
      selecionado[5].innerHTML +
      " - Tipo: " +
      selecionado[7].innerHTML +
      "\n";
  }

  alert(dados);
});


//************************************************************/
//Abre e fecha o formulário de anexos
function escondeElemento(div1, div2) {
  var div1 = document.getElementById(div1);
  var div2 = document.getElementById(div2);

  if (div2.style.display === "none" || div2.style.display === "") {
    div2.style.display = "flex";

    if (div1.style.display === "none" || div1.style.display === "") {
      div1.style.display = "flex";
    }
  } else {
    div2.style.display = "none";
    div1.style.display = "none";
  }
}

/*Valida Login*/
function validaLogin(){
 var login = document.getElementById("login").value; 
 var senha = document.getElementById("senha").value;
 
 (login==='Adm' && senha==='1234')?
  window.location.href="projetos.html": alert("Usuario ou senha incorretos!") 
 
}