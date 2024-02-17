async function loginFormHandler(event) {
    event.preventDefault();
  
    // Obtener los valores de los campos de entrada
    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
  
    // Validar que se hayan ingresado los campos
    if (!email || !password) {
      alert('Por favor, ingresa tu correo electrónico y contraseña.');
      return;
    }
  
    try {
      // Enviar los datos del formulario al servidor
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Error de inicio de sesión. Por favor, verifica tus credenciales.');
      }
  
      // Redireccionar al usuario después de iniciar sesión correctamente
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
  }
  