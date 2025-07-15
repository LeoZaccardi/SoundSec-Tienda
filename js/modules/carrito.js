import { mostrarToast } from "../utils/toast.js";

let carrito = [];

export function getCarrito() {
    return carrito;
}

export function inicializarCarrito() {
    try {
        const guardado = JSON.parse(localStorage.getItem("carrito"));
        carrito = Array.isArray(guardado) ? guardado : [];
    } catch {
        carrito = [];
    }
}

export function agregarAlCarrito(productos, id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const item = carrito.find(p => p.id === id);
    if (item) item.cantidad++;
    else carrito.push({ ...producto, cantidad: 1 });

    mostrarToast(`${producto.nombre} agregado al carrito`, "success");
    actualizarCarritoUI();
}

export function cambiarCantidad(id, accion) {
    const item = carrito.find(p => p.id === id);
    if (!item) return;

    if (accion === "sumar") item.cantidad++;
    else if (accion === "restar") item.cantidad > 1 ? item.cantidad-- : eliminarDelCarrito(id);

    actualizarCarritoUI();
}

export function eliminarDelCarrito(id) {
    carrito = carrito.filter(p => p.id !== id);
    mostrarToast("Producto eliminado", "warning");
    actualizarCarritoUI();
}

export function vaciarCarrito() {
    carrito = [];
    mostrarToast("Carrito vaciado", "warning");
    actualizarCarritoUI();
}

export function actualizarCarritoUI() {
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    const contador = document.getElementById("contador-carrito");

    lista.innerHTML = "";
    let suma = 0;
    let cantidad = 0;

    carrito.forEach(item => {
        suma += item.precio * item.cantidad;
        cantidad += item.cantidad;

        const li = document.createElement("li");
        li.className = "mb-3 p-3 bg-dark border border-warning rounded text-light";
        li.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <strong>${item.nombre}</strong><br>
                <span>$${item.precio} x ${item.cantidad}</span>
            </div>
            <div class="btn-group ms-2">
                <button class="btn btn-sm btn-outline-warning" onclick="cambiarCantidad(${item.id}, 'sumar')"><i class="bi bi-plus-lg"></i></button>
                <button class="btn btn-sm btn-outline-warning" onclick="cambiarCantidad(${item.id}, 'restar')"><i class="bi bi-dash-lg"></i></button>
                <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${item.id})"><i class="bi bi-trash-fill"></i></button>
            </div>
        </div>`;
        lista.appendChild(li);
    });

    total.textContent = suma;
    contador.textContent = cantidad;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}