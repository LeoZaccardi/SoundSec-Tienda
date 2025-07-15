import { cargarProductos } from "./modules/productos.js";
import { renderProductos, mostrarGaleria } from "./modules/render.js";
import { inicializarCarrito, agregarAlCarrito, actualizarCarritoUI, cambiarCantidad, eliminarDelCarrito, vaciarCarrito } from "./modules/carrito.js";
import { cargarPaises, configurarFormulario } from "./modules/formulario.js";
import { configurarFiltros } from "./modules/filtro.js";

let productos = [];

document.addEventListener("DOMContentLoaded", async () => {
    productos = await cargarProductos();
    inicializarCarrito();
    renderProductos(productos, document.getElementById("lista-productos"), (id) => agregarAlCarrito(productos, id), mostrarGaleria);
    configurarFiltros(productos);
    actualizarCarritoUI();
    configurarFormulario();
    cargarPaises();

    // Botón "Vaciar carrito"
    document.getElementById("vaciar").addEventListener("click", vaciarCarrito);

    // Exponer funciones para botones inline 
    window.cambiarCantidad = cambiarCantidad;
    window.eliminarDelCarrito = eliminarDelCarrito;
});