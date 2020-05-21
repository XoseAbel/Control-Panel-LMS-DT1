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
