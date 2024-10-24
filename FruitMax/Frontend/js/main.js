// Ejemplo de cómo obtener productos desde la API y mostrarlos
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => {
        const productSection = document.getElementById('productos');
        products.forEach(product => {
          const productElement = document.createElement('div');
          productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
          `;
          productSection.appendChild(productElement);
        });
      })
      .catch(error => console.error('Error al cargar los productos:', error));
  });
  