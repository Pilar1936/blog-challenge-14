async function logout() {
    try {
      // Envía una solicitud al servidor para cerrar la sesión del usuario
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al cerrar sesión');
      }
  
      // Redirecciona al usuario a la página de inicio después de cerrar sesión
      window.location.replace('/'); //  window.location.replace para redireccionar
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    }
  }