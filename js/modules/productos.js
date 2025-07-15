export async function cargarProductos() {
    try {
        const respuesta = await fetch('./data/productos.json');
        if (!respuesta.ok) throw new Error("Error al cargar productos.json");
        return await respuesta.json();
    } catch (error) {
        console.error("Error cargando productos:", error);
        return [];
    }
}