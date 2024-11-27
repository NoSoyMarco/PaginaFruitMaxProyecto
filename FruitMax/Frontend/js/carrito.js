// assets/carrito.js

document.addEventListener('DOMContentLoaded', async () => {
    const carritoContainer = document.querySelector('.carrito-container'); // Asegúrate de tener esta clase en tu HTML
    const totalContainer = document.querySelector('.total-container');
  
    // Obtener productos del carrito desde el backend
    async function obtenerCarrito() {
      try {
        const response = await fetch('http://localhost:3000/carrito'); // Cambia la ruta si es necesario
        if (!response.ok) throw new Error('Error al obtener el carrito');
        const carrito = await response.json();
        renderCarrito(carrito);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  
    // Renderizar el carrito en el HTML
    function renderCarrito(carrito) {
      carritoContainer.innerHTML = '';
      let total = 0;
  
      carrito.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('carrito-item');
        itemElement.innerHTML = `
          <p>${item.nombre} - $${item.precio}</p>
          <button class="btn-remove" data-id="${item.id}">Eliminar</button>
        `;
        carritoContainer.appendChild(itemElement);
        total += item.precio;
      });
  
      totalContainer.innerText = `Total: $${total}`;
    }
  
    // Eliminar un producto del carrito
    carritoContainer.addEventListener('click', async (e) => {
      if (e.target.classList.contains('btn-remove')) {
        const id = e.target.dataset.id;
        try {
          await fetch(`http://localhost:3000/carrito/${id}`, {
            method: 'DELETE'
          });
          obtenerCarrito(); // Refrescar el carrito
        } catch (error) {
          console.error('Error al eliminar el producto:', error);
        }
      }
    });
  
    // Cargar el carrito al iniciar
    obtenerCarrito();
  });
  