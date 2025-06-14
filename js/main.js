// variables y Configuracion
// Productos disponibles
const productos = [
    { 
        id: 1, nombre: "Columna 300", 
        precio: 1500000 ,
        categoria: "Altavoces", 
        imagen:[
            "./imagenes/productos/altavoces/1/columna-300-1.webp",
            "./imagenes/productos/altavoces/1/columna-300-2.webp",
            "./imagenes/productos/altavoces/1/columna-300-3.webp"

        ]
    },
    { 
        id: 2, 
        nombre: "Fluance Rt83", 
        precio: 1300000,
        categoria:"Altavoces",
        imagen:[
            "./imagenes/productos/altavoces/2/fluance-rt83-1.webp",
            "./imagenes/productos/altavoces/2/fluance-rt83-2.webp",
            "./imagenes/productos/altavoces/2/fluance-rt83-3.webp"
        ] 
    },
    { 
        id: 3, 
        nombre: "Edifier S2000MKII", 
        precio: 1230000 ,
        categoria: "Altavoces",
        imagen:[
            "./imagenes/productos/altavoces/3/edifier-s2000mkii-1.webp",
            "./imagenes/productos/altavoces/3/edifier-s2000mkii-2.webp",
            "./imagenes/productos/altavoces/3/edifier-s2000mkii-3.webp",
            "./imagenes/productos/altavoces/3/edifier-s2000mkii-4.webp"
        ]
    },
    {
        id: 4,
        nombre: "Ayon Triron",
        precio: 2983000,
        categoria: "Amplificadores",
        imagen:[
            "./imagenes/productos/amplificadores/1/ayon-triton-1.webp",
            "./imagenes/productos/amplificadores/1/ayon-triton-2.webp"
        ]
    },
    {
        id: 5,
        nombre: "Triode Corp",
        precio: 2387900,
        categoria: "Amplificadores",
        imagen:[
            "./imagenes/productos/amplificadores/2/triode-corp.webp",
        ]
    },
    {
        id: 6,
        nombre: "Atma Sphere",
        precio: 1786734,
        categoria: "Amplificadores",
        imagen:[
            "./imagenes/productos/amplificadores/3/atma-sphere.webp"
        ]
    },
    {
        id:7,
        nombre: "Senheiser 900",
        precio: 3299800,
        categoria: "Auriculares In-Ear",
        imagen:[
            "./imagenes/productos/Auriculares in-ear/1/senheiser-900-1.webp",
            "./imagenes/productos/Auriculares in-ear/1/senheiser-900-2.webp",
            "./imagenes/productos/Auriculares in-ear/1/senheiser-900-3.webp"
        ]
    },
    {
        id:8,
        nombre: "Samsung Galaxy Buds Pro",
        precio: 1129880,
        categoria: "Auriculares In-Ear",
        imagen:[
            "./imagenes/productos/Auriculares in-ear/2/galaxy-buds-pro-1.webp",
            "./imagenes/productos/Auriculares in-ear/2/galaxy-buds-pro-2.webp",
            "./imagenes/productos/Auriculares in-ear/2/galaxy-buds-pro-3.webp",
            "./imagenes/productos/Auriculares in-ear/2/galaxy-buds-pro-4.webp",
            "./imagenes/productos/Auriculares in-ear/2/galaxy-buds-pro-5.webp"
        ]
    },
    {
        id: 9,
        nombre: "Sony Wf-1000XM5",
        precio: 850980,
        categoria: "Auriculares In-Ear",
        imagen:[
            "./imagenes/productos/Auriculares in-ear/3/sony-wf1000xm5-1.webp",
            "./imagenes/productos/Auriculares in-ear/3/sony-wf1000xm5-2.webp",
            "./imagenes/productos/Auriculares in-ear/3/sony-wf1000xm5-3.webp"
        ]
    },
    {
        id: 10,
        nombre: "Focal Stellia",
        precio: 1232765,
        categoria: "Auriculares Over-Ear",
        imagen:[
            "./imagenes/productos/Auriculares over-ear/1/focal-stellia-1.webp",
            "./imagenes/productos/Auriculares over-ear/1/focal-stellia-2.webp",
            "./imagenes/productos/Auriculares over-ear/1/focal-stellia-3.webp",
            "./imagenes/productos/Auriculares over-ear/1/focal-stellia-4.webp"
        ]
    },
    {
        id: 11,
        nombre: "Senheiser HD-820",
        precio: 1009280,
        categoria: "Auriculares Over-Ear",
        imagen:[
            "./imagenes/productos/Auriculares over-ear/2/senheiser-hd820-1.webp",
            "./imagenes/productos/Auriculares over-ear/2/senheiser-hd820-2.webp",
            "./imagenes/productos/Auriculares over-ear/2/senheiser-hd820-3.webp"
        ]
    },
    {
        id: 12,
        nombre: "Bose Quiet Comfort",
        precio: 987630,
        categoria: "Auriculares Over-Ear",
        imagen:[
            "./imagenes/productos/Auriculares over-ear/3/bose-quietcomfort-1.webp",
            "./imagenes/productos/Auriculares over-ear/3/bose-quietcomfort-2.webp",
            "./imagenes/productos/Auriculares over-ear/3/bose-quietcomfort-3.webp",
            "./imagenes/productos/Auriculares over-ear/3/bose-quietcomfort-4.webp"
        ]
    },
    {
        id: 13,
        nombre: "Krell K-300i",
        precio: 3465000,
        categoria:"DAC",
        imagen:[
            "./imagenes/productos/dacs/1/krell-k300i-1.webp",
            "./imagenes/productos/dacs/1/krell-k300i-2.webp"
        ]
    },
    {
        id: 14,
        nombre: "Mcintosh D-1100",
        precio: 2530020,
        categoria:"DAC",
        imagen:[
            "./imagenes/productos/dacs/2/mcintosh-d1100-1.webp",
            "./imagenes/productos/dacs/2/mcintosh-d1100-2.webp"
        ]
    },
    {
        id:15,
        nombre: "Sda 1 Streamer",
        precio: 765000,
        categoria: "DAC",
        imagen:[
            "./imagenes/productos/dacs/3/sda1-streamer-1.webp",
            "./imagenes/productos/dacs/3/sda1-streamer-2.webp"
        ]
    },
    {
        id:16,
        nombre: "JBL Party Box Ultimate",
        precio: 3850000,
        categoria: "Parlantes Portatiles",
        imagen:[
            "./imagenes/productos/parlantes portatiles/1/jbl-partybox-ultimate-1.webp"
        ]
    },
    {
        id:17,
        nombre: "Sony Tower Ultra ",
        precio: 2650000,
        categoria: "Parlantes Portatiles",
        imagen:[
            "./imagenes/productos/parlantes portatiles/2/sony-ultra-1.webp",
            "./imagenes/productos/parlantes portatiles/2/sony-ultra-2.webp"
        ]
    },
    {
        id:18,
        nombre: "JBL Party Box 710",
        precio: 1230004,
        categoria: "Parlantes Portatiles",
        imagen:[
            "./imagenes/productos/parlantes portatiles/3/jbl-partybox-710-1.webp",
            "./imagenes/productos/parlantes portatiles/3/jbl-partybox-710-2.webp"
        ]
    }
];

// Inicializar carrito desde localStorage con validación
let carrito = [];
try {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    if (Array.isArray(carritoGuardado)){
        carrito = carritoGuardado;
    }else{
        throw new Error("Formato de carrito inválido");
    }
} catch (e) {
    console.warn("LocalStorage corrupto. Carrito reiniciado.");
    carrito = [];
}

// Referencias al DOM
const listaProductos = document.getElementById("lista-productos");
const listaCarrito = document.getElementById("lista-carrito");
const total = document.getElementById("total");
const finalizar = document.getElementById("finalizar");
const vaciar = document.getElementById("vaciar");
const contador = document.getElementById("contador-carrito");

// Validar existencia de elementos
if (!listaProductos || !listaCarrito || !total || !finalizar || !vaciar) {
    console.error("Faltan elementos del DOM necesarios para el funcionamiento.");
}

// Crear toast visual
const toast = document.createElement("div");
toast.id = "toast";
toast.setAttribute("role", "alert");
toast.setAttribute("aria-live", "assertive");
toast.setAttribute("aria-atomic", "true");
toast.style.position = "fixed";
toast.style.bottom = "20px";
toast.style.right = "20px";
toast.style.background = "#333";
toast.style.color = "#fff";
toast.style.padding = "10px 20px";
toast.style.borderRadius = "5px";
toast.style.display = "none";
toast.style.zIndex = "999";
document.body.appendChild(toast);

function mostrarToast(mensaje) {
    toast.textContent = mensaje;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

// Renderizar productos
function renderProductos(array = productos) {
    listaProductos.innerHTML = "";
    array.forEach(prod => {
        if (!prod.nombre || !prod.precio || !Array.isArray(prod.imagen) || prod.imagen.length === 0) {
            console.warn("Producto inválido omitido:", prod);
            return;
        }

        const col = document.createElement("div");
        col.className = "col-md-6 mb-4";

        const card = document.createElement("div");
        card.className = "card text-bg-dark border-warning shadow";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = prod.imagen[0];
        img.alt = prod.nombre;
        img.style.cursor = "pointer";
        img.onerror = () => img.src = "./imagenes/default.jpg";
        img.onclick = () => mostrarGaleria(prod.imagen, prod.nombre);

        const body = document.createElement("div");
        body.className = "card-body";

        const titulo = document.createElement("h5");
        titulo.className = "card-title text-warning";
        titulo.textContent = prod.nombre;

        const precio = document.createElement("p");
        precio.className = "card-text";
        precio.textContent = `$${prod.precio}`;

        const btn = document.createElement("button");
        btn.className = "btn btn-outline-warning mt-2";
        btn.textContent = "Agregar al carrito";
        btn.onclick = () => agregarAlCarrito(prod.id);

        body.appendChild(titulo);
        body.appendChild(precio);
        body.appendChild(btn);
        card.appendChild(img);
        card.appendChild(body);
        col.appendChild(card);
        listaProductos.appendChild(col);
    });
}

// Agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto || isNaN(producto.precio) || producto.precio <= 0) return;

    const item = carrito.find(p => p.id === id);
    if (item) item.cantidad++;
    else carrito.push({ ...producto, cantidad: 1 });

    mostrarToast(`${producto.nombre} agregado al carrito`);
    actualizarCarrito();
}

// Cambiar cantidad con validación
function cambiarCantidad(id, accion) {
    const item = carrito.find(p => p.id === id);
    if(!item){
        console.warn("Intento de modificar producto no existente.");
        return;
    }

    if (accion === "sumar") {
        item.cantidad++;
    }else if (accion === "restar") {
        if (item.cantidad > 1) {
            item.cantidad--;
        } else {
            eliminarDelCarrito(id);
            return;
        }
    }

  actualizarCarrito();
}

// Eliminar producto
function eliminarDelCarrito(id) {
    if(!carrito.some(p => p.id === id)) {
        console.warn("Producto a eliminar no encontrado.");
        return;
    }
    carrito = carrito.filter(item => item.id !== id);
    mostrarToast("Producto eliminado");
    actualizarCarrito();
}

// Vaciar carrito
vaciar.addEventListener("click", () => {
    if (carrito.length === 0) {
        mostrarToast("El carrito ya está vacío.");
        return;
    }
    carrito = [];
    mostrarToast("Carrito vaciado");
    actualizarCarrito();
});

// Finalizar compra
finalizar.addEventListener("click", () => {
    if (carrito.length === 0) {
        mostrarToast("El carrito está vacío.");
        return;
    }
    mostrarToast("¡Gracias por tu compra!");
    carrito = [];
    actualizarCarrito();
});

// Actualizar vista del carrito
function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let totalCompra = 0;
    let cantidadTotal = 0;

    carrito.forEach(item => {
        if (isNaN(item.precio) || isNaN(item.cantidad) || item.cantidad < 1) {
            console.warn("Producto con datos inválidos detectado. Omitido.");
            return;
        }

        totalCompra += item.precio * item.cantidad;
        cantidadTotal += item.cantidad;

        const li = document.createElement("li");
        li.className = "mb-3 p-3 bg-dark border border-warning rounded text-light";

        li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <strong>${item.nombre}</strong><br>
                    <span>$${item.precio} x ${item.cantidad}</span>
                </div>
                <div class="btn-group ms-2">
                    <button class="btn btn-sm btn-outline-warning" onclick="cambiarCantidad(${item.id}, 'sumar')">
                        <i class="bi bi-plus-lg"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-warning" onclick="cambiarCantidad(${item.id}, 'restar')">
                        <i class="bi bi-dash-lg"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${item.id})">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </div>
        `;
        listaCarrito.appendChild(li);
    });

    total.textContent = totalCompra;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.title = `SoundSec (${cantidadTotal})`;
    const contador = document.getElementById("contador-carrito");
    contador.textContent = cantidadTotal;
    contador.classList.add("flash");

    setTimeout(() => {
        contador.classList.remove("flash");
    }, 300);
}
function mostrarGaleria(imagenes, nombreProducto) {
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

// Inicialización
renderProductos();
actualizarCarrito();