/* MODO OSCURO */

function cambiarModo() {
    document.body.classList.toggle("modo-oscuro");
}

/* BOTÓN VOLVER ARRIBA */

window.onscroll = function() {
    mostrarBotonSubir();
};

function mostrarBotonSubir() {
    let boton = document.getElementById("botonSubir");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* VALIDACIÓN DEL FORMULARIO */

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formContacto");
    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();
            const resultado = document.getElementById("mensajeFormulario");
            if (nombre === "" || email === "" || mensaje === "") {
                resultado.textContent = "⚠️ Por favor completá todos los campos.";
                resultado.style.color = "red";
            } else {
                resultado.textContent = "✅ ¡Mensaje enviado correctamente!";
                resultado.style.color = "green";
                formulario.reset();
            }
        });
    }
});
function abrirImagen(imagen) {
    const visor = document.getElementById("visorImagen");
    const imagenGrande = document.getElementById("imagenGrande");
    imagenGrande.src = imagen.src;
    visor.style.display = "flex";
}
function cerrarImagen() {
    document.getElementById("visorImagen").style.display = "none";

}