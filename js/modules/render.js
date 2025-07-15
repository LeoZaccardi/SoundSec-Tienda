import { mostrarToast } from "../utils/toast.js";
const formatoMoneda = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
});
export function renderProductos(productos, listaProductos, callbackAgregar, callbackGaleria) {
    listaProductos.innerHTML = "";
    productos.forEach(prod => {
        if (!prod.nombre || !prod.precio || !Array.isArray(prod.imagen)) return;

        const col = document.createElement("div");
        col.className = "col-md-6 mb-4";

        const card = document.createElement("div");
        card.className = "card text-bg-dark border-warning shadow";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = prod.imagen[0];
        img.alt = prod.nombre;
        img.onclick = () => callbackGaleria(prod.imagen, prod.nombre);

        const body = document.createElement("div");
        body.className = "card-body";

        const titulo = document.createElement("h5");
        titulo.className = "card-title text-warning";
        titulo.textContent = prod.nombre;

        const precio = document.createElement("p");
        precio.className = "card-text";
        precio.textContent = formatoMoneda.format(prod.precio);

        const btn = document.createElement("button");
        btn.className = "btn btn-outline-warning mt-2";
        btn.textContent = "Agregar al carrito";
        btn.onclick = () => callbackAgregar(prod.id);

        body.append(titulo, precio, btn);
        card.append(img, body);
        col.appendChild(card);
        listaProductos.appendChild(col);
    });
}

export function mostrarGaleria(imagenes, nombreProducto) {
    const contenedor = document.getElementById("contenedor-imagenes");
    const titulo = document.getElementById("modalLabel");

    contenedor.innerHTML = "";
    titulo.textContent = `Imágenes de ${nombreProducto}`;

    imagenes.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = nombreProducto;
        img.className = "img-fluid rounded mb-3 shadow";
        contenedor.appendChild(img);
    });

    const modal = new bootstrap.Modal(document.getElementById("modalGaleria"));
    modal.show();
}