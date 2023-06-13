// Obtém a área de drop
var dropArea = document.getElementById("dropArea");

//*******************************************************
//Adiciona os eventos de arrastar e soltar
dropArea.addEventListener("dragover", handleDragOver, false);
dropArea.addEventListener("drop", handleFileDrop, false);

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "copy";
}

function handleFileDrop(event) {
  event.preventDefault();

  var files = event.dataTransfer.files;
  var output = document.getElementById("droppedFiles");
  var qtdFile = document.getElementById("qtdAnexo");

  output.innerHTML = "";
  qtdFile.innerHTML = "";
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var fileLink = createFileLink(file);
    output.appendChild(fileLink);
  }
  if (files.length > 1) {
    qtdFile.innerHTML = files.length + " Anexos";
  } else {
    qtdFile.innerHTML = files.length + " Anexo";
  }
}

function createFileLink(file) {
  var fileLink = document.createElement("a");
  fileLink.href = URL.createObjectURL(file);
  fileLink.target = "_blank";
  var tipo = file.type;
  fileLink.innerText =
  file.name + " (" + tipo.substring(3, 11) + ", " + file.size + " bytes)";
  fileLink.classList.add("file-link");

  return fileLink;
}

function openFileSelector() {
  var fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.onchange = function (event) {
    var files = event.target.files;
    console.log(files); // Aqui você pode fazer o processamento dos arquivos selecionados
  };
  fileInput.click();
}
