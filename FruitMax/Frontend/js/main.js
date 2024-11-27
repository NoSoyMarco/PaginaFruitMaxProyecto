// URL del backend
const API_URL = "http://localhost:3000/api/products";

// Función para obtener los productos
async function obtenerProductos() {
    try {
        const response = await fetch(API_URL); // Llamada al backend
        const productos = await response.json(); // Conversión de la respuesta a JSON
        renderizarProductos(productos); // Renderizar en el HTML
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

// Función para renderizar productos en el HTML
function renderizarProductos(productos) {
    const listaProductos = document.getElementById("product-list");
    listaProductos.innerHTML = ""; // Limpiar contenido previo

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.image_url}" alt="${producto.name}" />
                <h3>${producto.name}</h3>
                <p>${producto.description}</p>
                <p><strong>Precio:</strong> $${producto.price.toLocaleString("es-CO")}</p>
                <p><strong>Stock:</strong> ${producto.stock > 0 ? producto.stock : "Agotado"}</p>
            </div>
        `;
        listaProductos.innerHTML += productoHTML;
    });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", obtenerProductos);

console.log("JavaScript conectado correctamente");
