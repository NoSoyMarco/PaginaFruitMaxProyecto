document.addEventListener('DOMContentLoaded', () => {
    const botonBuscar = document.getElementById('btn-buscar');
  
    if (botonBuscar) {
      botonBuscar.addEventListener('click', buscarProducto);
    } else {
      console.error('No se encontró el botón de búsqueda en el DOM.');
    }
  });
  
  function buscarProducto() {
    const termino = document.getElementById('buscador').value.trim();
  
    if (termino === '') {
      document.getElementById('resultados').innerHTML = '<p>Por favor ingresa un término para buscar.</p>';
      return;
    }
  
    fetch(`http://localhost:3000/productos?search=${encodeURIComponent(termino)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al buscar productos.');
        }
        return response.json();
      })
      .then((productos) => {
        const resultadosContainer = document.getElementById('resultados');
        resultadosContainer.innerHTML = '';
  
        if (productos.length === 0) {
          resultadosContainer.innerHTML = '<p>No se encontraron productos.</p>';
          return;
        }
  
        productos.forEach((producto) => {
          const productoDiv = document.createElement('div');
          productoDiv.classList.add('producto');
          productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio} COP</p>
          `;
          resultadosContainer.appendChild(productoDiv);
        });
      })
      .catch((error) => {
        console.error('Error al buscar productos:', error);
        document.getElementById('resultados').innerHTML = '<p>Error al buscar productos.</p>';
      });
  }
  