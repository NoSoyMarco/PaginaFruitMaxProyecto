document.addEventListener("DOMContentLoaded", () => {
    // Fetch a los productos desde el backend
    fetch('http://localhost:3000/productos')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Productos cargados:', data);
  
        // Seleccionamos el contenedor de los productos
        const productosContainer = document.querySelector('#productos'); // Asegúrate que el ID coincida con el HTML
  
        // Verifica si el contenedor existe
        if (!productosContainer) {
          console.error("Error: No se encontró un elemento con el ID 'productos'.");
          return;
        }
  
        // Limpiamos el contenedor para evitar duplicados
        productosContainer.innerHTML = '';
  
        // Agregamos los productos al HTML
        productosContainer.innerHTML = data
          .map(producto => `
            <div class="producto-card">
              <img src="${producto.imagen_url}" alt="${producto.nombre}" class="producto-img">
              <h3>${producto.nombre}</h3>
              <p>Precio: ${producto.precio} COP</p>
            </div>
          `)
          .join('');
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error);
      });
  });
  
