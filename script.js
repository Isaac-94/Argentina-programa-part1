//Menu Hamburguesa responsivo
function myFunction() {
  var x = document.getElementById("mymenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

//funcion boton de pie de mostrar seccion intereses
function mostrarIntereses() {
  var y = document.getElementById("intereses");
  if (y.style.display === "none") {
    y.style.display = "inline";
    document.getElementById("textoInt").innerHTML = "Ocultar intereses";
  } else {
    y.style.display = "none";
    document.getElementById("textoInt").innerHTML = "Intereses";
  }
}
//funcionboton de pie de desplegar seccion de Certificados
function mostrarCertificados() {
  var z = document.getElementById("certificados");
  if (z.style.display === "none") {
    z.style.display = "inline";
    document.getElementById("textobtn").innerHTML = "Ocultar";
  } else {
    z.style.display = "none";
    document.getElementById("textobtn").innerHTML = "Ver certificados";
  }
}

//Descargar en PDF html2pdf
window.onload = function () {
  document.getElementById("descargar").addEventListener("click", () => {
    const invoice = this.document.getElementById("invoice");
    var opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(invoice).set(opt).save();
  });
};
