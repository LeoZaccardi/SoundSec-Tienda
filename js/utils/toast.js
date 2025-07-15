export function mostrarToast(mensaje, tipo = "info") {
    Toastify({
        text: mensaje,
        duration: 2500,
        gravity: "bottom",
        position: "right",
        backgroundColor: tipo === "success" ? "#28a745" :
                         tipo === "error" ? "#dc3545" :
                         tipo === "warning" ? "#ffc107" : "#333",
    }).showToast();
}