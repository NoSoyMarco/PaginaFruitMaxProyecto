// assets/register.js

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('#register-form');
  
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const nombre = document.querySelector('#nombre').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
  
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre, email, password })
        });
  
        if (!response.ok) throw new Error('Error al registrar usuario');
        const data = await response.json();
        alert('Registro exitoso. Por favor inicia sesión.');
        // Redirigir al login si es necesario
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        alert('Error en el registro');
      }
    });
  });
  