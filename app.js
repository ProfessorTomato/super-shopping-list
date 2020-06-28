function borrar_tarjeta(id) {
  var elem = document.querySelector("#" + id);
  elem.parentNode.removeChild(elem);
}

// Hay que definirlo cuando se cargue el documento HTML
var count = 0;

function nueva_tarjeta(div_destino, nombre, texto1, texto2, color) {
  if (nombre != "") {
    let id_tarjeta = nombre + count;
    console.log("Aquí intentamos crear la nueva tarjeta\n");
    var html_code =
      "<div id='" +
      id_tarjeta +
      "' class='w3-card-4 w3-margin-bottom'>\n<header class='w3-bar " +
      color +
      " w3-padding'>\n<div class='w3-left'><h3>" +
      nombre +
      "</h3></div>\n<div class='w3-right'>\n<button class='w3-button w3-circle w3-white w3-xlarge w3-right w3-text-red' onclick='borrar_tarjeta(\"" +
      id_tarjeta +
      "\")'>" +
      "&minus;</button></div></header><div class='w3-container'><p>" +
      texto1 +
      "</p></div><footer class='w3-container w3-light-grey'><p>" +
      texto2 +
      "</p></footer></div>";

    count++;
    var div_inner_html = document.getElementById(div_destino).innerHTML;
    console.log(div_inner_html);
    document.getElementById(div_destino).innerHTML = div_inner_html + html_code;

    // Reset inputs
    document.getElementById("input_nombre").value = "";
    document.getElementById("input_text1").value = "";
    document.getElementById("input_text2").value = "";
  } else {
    alert("Empty name!");
  }
}
