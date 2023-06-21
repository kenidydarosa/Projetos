/*altera o formato de data dos campos */
function alteraFormato(campo) {
  var data = campo.value;

  if (data === "") {
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
*/

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
  // sweetalert2('success','Item selecionado',`Você clicou em ${dados}`)
  // alert(dados);
  window.location.href = "timeLine.html"
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

// // função pra ler querystring
// function queryString(parameter) {  
//   var loc = location.search.substring(1, location.search.length);   
//   var param_value = false;   
//   var params = loc.split("&");   
//   for (i=0; i<params.length;i++) {   
//       param_name = params[i].substring(0,params[i].indexOf('='));   
//       if (param_name == parameter) {                                          
//           param_value = params[i].substring(params[i].indexOf('=')+1)   
//       }   
//   }   
//   if (param_value) {   
//       return param_value;   
//   }   
//   else {   
//       return undefined;   
//   }   
// }
// var mudaIniciais = function (valor){
//   window.location.href = "projetos.html?iniciaisUsuario =" + valor;
//   // document.getElementById("Iniciais").innerHTML = iniciais;
// }
// var variavel = queryString("minhaVariavel");

/*Valida Login*/
function validaLogin() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login === 'Kenidy.Rosa' && senha === '1234') {
    var vetIniciais = login.split('.');
    var priLetra = vetIniciais[0].substring(1, 0);
    var secLetra = vetIniciais[1].substring(1, 0);
    var iniciais = priLetra + secLetra;
    // 
    // mudaIniciais(iniciais)
    window.location.href = "projetos.html" ;   // const janelaDestino = window.open('projetos.html',"_blank");
  }
  else {
    alert("Usuario ou senha incorretos!");
  }
}



// document.getElementById("btnConfirm").addEventListener("click",sweetalert2('success','testando','teste'))
// function sweetalert2(icon,title,text) {
//   swal.fire({
//     icon: icon,
//     title: title,
//     text: text,
//     showCancelButton: false,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     // confirmButtonText: 'Sim, tenho certeza!',
//     // cancelButtonText: 'Melhor eu parar...'
//   })
// }