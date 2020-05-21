function muestra_oculta(id) {
  if (document.getElementById) {
    //se obtiene el id
    var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
    el.style.display = el.style.display == "none" ? "block" : "none"; //damos un atributo display:none que oculta el div
  }
  console.log(el);
}

function mostrarnoarticles(id) {
  if (document.getElementById) var juan = document.getElementById(id);
  if (count_click > 1) {
    juan.style.display = "none";
    console.log("no hay");
  } else {
    juan.style.display = "block";
    console.log("hay");
  }
  console.log(juan);
}
