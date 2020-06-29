function remove_card(id) {
  var elem = document.querySelector("#" + id);
  elem.parentNode.removeChild(elem);
}

var count = 0;

function add_new_card(target_div, card_name, text1, text2, color) {
  if (card_name != "") {
    let card_id = "card_id_" + count;
    console.log("Trying to create a new card\n");
    var html_code =
      "<div id='" +
      card_id +
      "' class='w3-card-4 w3-margin-bottom'>\n<header class='w3-bar " +
      color +
      " w3-padding'>\n<div class='w3-left'><h3>" +
      card_name +
      "</h3></div>\n<div class='w3-right'>\n<button class='w3-button w3-circle w3-white w3-xlarge w3-right w3-text-red' onclick='remove_card(\"" +
      card_id +
      "\")'>" +
      "&minus;</button></div></header><div class='w3-container'><p>" +
      text1 +
      "</p></div><footer class='w3-container w3-light-grey'><p>" +
      text2 +
      "</p></footer></div>";

    count++;
    var div_inner_html = document.getElementById(target_div).innerHTML;
    console.log(div_inner_html);
    document.getElementById(target_div).innerHTML = div_inner_html + html_code;

    // Reset inputs
    document.getElementById("input_name").value = "";
    document.getElementById("input_text1").value = "";
    document.getElementById("input_text2").value = "";
  } else {
    alert("Empty name!");
  }
}
