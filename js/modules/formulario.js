import { vaciarCarrito, actualizarCarritoUI } from "./carrito.js";
import { mostrarToast } from "../utils/toast.js";

export function configurarFormulario() {
    const form = document.getElementById("formularioCompra");
    const finalizar = document.getElementById("finalizar");

    finalizar.addEventListener("click", () => {
        if (JSON.parse(localStorage.getItem("carrito"))?.length === 0) {
            mostrarToast("El carrito está vacío", "warning");
            return;
        }

        precargarFormulario();
        const modal = new bootstrap.Modal(document.getElementById("modalFormulario"));
        modal.show();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const direccion = document.getElementById("direccion");
        const telefono = document.getElementById("telefono");
        const pais = document.getElementById("pais");

        let valido = true;

        [nombre, email, direccion, telefono, pais].forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add("is-invalid");
                valido = false;
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (valido) {
            guardarDatosFormulario({ nombre: nombre.value, email: email.value, direccion: direccion.value, telefono: telefono.value, pais: pais.value });
            mostrarToast("¡Compra confirmada!", "success");
            vaciarCarrito();
            actualizarCarritoUI();
            bootstrap.Modal.getInstance(document.getElementById("modalFormulario")).hide();
            form.reset();
        }
    });
}
export async function cargarPaises() {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
        const paises = await res.json();

        const selectPais = document.getElementById("pais");
        const nombresOrdenados = paises
            .map(p => p.name.common)
            .sort((a, b) => a.localeCompare(b));

        nombresOrdenados.forEach(nombre => {
            const option = document.createElement("option");
            option.value = nombre;
            option.textContent = nombre;
            selectPais.appendChild(option);
        });

    } catch (error) {
        console.error("Error al cargar países:", error);
    }
}

function precargarFormulario() {
    const datos = JSON.parse(localStorage.getItem("datosUsuario"));
    if (!datos) return;

    document.getElementById("nombre").value = datos.nombre || "";
    document.getElementById("email").value = datos.email || "";
    document.getElementById("direccion").value = datos.direccion || "";
    document.getElementById("telefono").value = datos.telefono || "";
    document.getElementById("pais").value = datos.pais || "";
}

function guardarDatosFormulario(data) {
    localStorage.setItem("datosUsuario", JSON.stringify(data));
}