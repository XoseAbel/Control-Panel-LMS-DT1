function muestra_oculta(id) {
  if (document.getElementById) {
    //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = el.style.display == "none" ? "block" : "none"; //damos un atributo display:none que oculta el div
  }
}

function mostrarnoarticles(id) {
  if (document.getElementById) var numarticles = document.getElementById(id);
  if (count_click > 1) {
    numarticles.style.display = "none";
  } else {
    numarticles.style.display = "block";
  }
}

function paymentmethod(id) {
  let card = document.getElementById("ccard");
  let transfer = document.getElementById("transfer");
  let paypal = document.getElementById("paypal");
  switch (id) {
    case "ccard":
      console.log(id);
      // card.style.display = "flex";
      // card.style.flexDirection = "column";
      card.style.display = "inline-flex";
      transfer.style.display = "none";
      paypal.style.display = "none";
      break;
    case "paypal":
      console.log(id);
      card.style.display = "none";
      transfer.style.display = "none";
      paypal.style.display = "block";
      break;
    case "transfer":
      console.log(id);
      card.style.display = "none";
      transfer.style.display = "block";
      paypal.style.display = "none";
      break;
  }
}

function addFile() {
  let name = document.getElementById("filename");
  let name2 = name.getAttribute("value");
  let foption = document.createElement("option");
  let selectoption = document.getElementById("fileselect");
  foption.text = name2;
  foption.name = name2;
  foption.id = name2;
  selectoption.appendChild(foption);
}

function erase() {
  let name = document.getElementById("fileselect");
  name.remove(name.selectedIndex);
}
