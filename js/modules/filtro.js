// Filtro
import { renderProductos } from "./render.js";
import { agregarAlCarrito } from "./carrito.js";
import { mostrarGaleria } from "./render.js";

export function configurarFiltros(productos) {
    const filtroCategoria = document.getElementById("filtroCategoria");
    const buscadorNombre = document.getElementById("buscadorNombre");

    if (!filtroCategoria || !buscadorNombre) return;

    filtroCategoria.addEventListener("change", () =>
        aplicarFiltros(productos)
    );
    buscadorNombre.addEventListener("input", () =>
        aplicarFiltros(productos)
    );
}

function aplicarFiltros(productos) {
    const categoriaSeleccionada = document
        .getElementById("filtroCategoria")
        .value.toLowerCase();
    const textoBuscado = document
        .getElementById("buscadorNombre")
        .value.toLowerCase();

    const filtrados = productos.filter((producto) => {
        const coincideCategoria =
            categoriaSeleccionada === "todos" ||
            producto.categoria.toLowerCase() === categoriaSeleccionada;
        const coincideNombre = producto.nombre
            .toLowerCase()
            .includes(textoBuscado);
        return coincideCategoria && coincideNombre;
    });

    const contenedor = document.getElementById("lista-productos");
    renderProductos(
        filtrados,
        contenedor,
        (id) => agregarAlCarrito(productos, id),
        mostrarGaleria
    );
}