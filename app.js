var array_list = [];

function remove_card(id) {
  var elem = document.querySelector("#" + id);
  elem.parentNode.removeChild(elem);
}

function reset_inputs() {
  document.getElementById("input_name").value = "";
  document.getElementById("input_text1").value = "";
  document.getElementById("input_text2").value = "";
}

class Item_card {
  constructor(card_name, text1, text2, color) {
    this.card_id = "id_" + Date.now();
    this.card_name = card_name;
    this.text1 = text1;
    this.text2 = text2;
    this.color = color;
  }

  set_id(id) {
    this.card_id = id;
  }

  add_new_card(target_div) {
    if (this.card_name != "") {
      console.log("Trying to create a new card\n");
      var html_code =
        "<div id='" +
        this.card_id +
        "' class='w3-card-4 w3-margin-bottom'>\n<header class='w3-bar " +
        this.color +
        " w3-padding'>\n<div class='w3-left'><h3>" +
        this.card_name +
        "</h3></div>\n<div class='w3-right'>\n<button class='w3-button w3-circle w3-white w3-xlarge w3-right w3-text-red' onclick='remove_card(\"" +
        this.card_id +
        "\")'>" +
        "&minus;</button></div></header><div class='w3-container w3-white'><p>" +
        this.text1 +
        "</p></div><footer class='w3-container w3-light-grey'><p>" +
        this.text2 +
        "</p></footer></div>";

      let div_inner_html = document.getElementById(target_div).innerHTML;
      document.getElementById(target_div).innerHTML =
        div_inner_html + html_code;

      // Reset inputs
      reset_inputs();
    } else {
      alert("Empty name!");
    }
  }
}

function add_card_to_list(target_div, color) {
  let card = new Item_card(
    document.getElementById("input_name").value,
    document.getElementById("input_text1").value,
    document.getElementById("input_text2").value,
    color
  );

  console.log(card);

  card.add_new_card("card-container");

  document.getElementById("modal_add").style.display = "none";
}

// Local Storage
window.addEventListener(
  "load",
  function () {
    let list_storage = JSON.parse(localStorage.getItem("list_data"));
    if (typeof list_storage !== "undefined" && list_storage !== null) {
      array_list = list_storage;
      console.log(array_list);

      for (let i = 0; i < array_list.length; i++) {
        console.log(array_list[i]);
        let card = new Item_card(
          array_list[i].card_name,
          array_list[i].text1,
          array_list[i].text2,
          array_list[i].color
        );
        card.set_id(array_list[i].card_id);
        card.add_new_card("card-container");
      }
    }
  },
  false
);

window.addEventListener(
  "unload",
  function () {
    console.log("Ahora se guarda el localStorage\n");
    window.localStorage.clear();
    array_list = [];
    cards_to_list();
    window.localStorage.setItem("list_data", JSON.stringify(array_list));
  },
  false
);

// Función para recorrer los nodos hijo de card-container y almacenarlos en la variable array_list
function cards_to_list() {
  array_list = [];
  var container_children = document.getElementById("card-container").children;

  for (let i = 0; i < container_children.length; i++) {
    console.log(container_children[i]);
    let card = new Item_card(
      container_children[i].getElementsByTagName("h3")[0].innerText,
      container_children[i].getElementsByTagName("p")[0].innerText,
      container_children[i].getElementsByTagName("p")[1].innerText,
      container_children[i].getElementsByTagName("header")[0].classList[1]
    );

    card.set_id(container_children[i].getAttribute("id"));

    array_list.push(card);
  }
  console.log(array_list);
}
