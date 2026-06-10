const boton = document.getElementById("modo");

boton.addEventListener("click", () => {

document.body.classList.toggle("oscuro");

});
.oscuro{

background:
linear-gradient(
135deg,
#f1f5f9,
#e2e8f0
);

color:black;
}