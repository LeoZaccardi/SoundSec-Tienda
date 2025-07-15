import { cargarProductos } from "./modules/productos.js";
import { renderProductos, mostrarGaleria } from "./modules/render.js";
import { inicializarCarrito, agregarAlCarrito, actualizarCarritoUI, cambiarCantidad, eliminarDelCarrito, vaciarCarrito } from "./modules/carrito.js";
import { configurarFormulario } from "./modules/formulario.js";

let productos = [];

document.addEventListener("DOMContentLoaded", async () => {
    productos = await cargarProductos();
    inicializarCarrito();
    renderProductos(productos, document.getElementById("lista-productos"), (id) => agregarAlCarrito(productos, id), mostrarGaleria);
    actualizarCarritoUI();
    configurarFormulario();

    // Botón "Vaciar carrito"
    document.getElementById("vaciar").addEventListener("click", vaciarCarrito);

    // Exponer funciones para botones inline 
    window.cambiarCantidad = cambiarCantidad;
    window.eliminarDelCarrito = eliminarDelCarrito;
});