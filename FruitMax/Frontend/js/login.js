// assets/login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
  
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
  
      try {
        const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) throw new Error('Credenciales incorrectas');
        const data = await response.json();
        alert(`Bienvenido, ${data.nombre}`);
        // Redirigir a otra página si es necesario
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        alert('Usuario o contraseña incorrectos');
      }
    });
  });
  