// Envío del formulario de contacto
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Obtener datos del formulario
	const name = form.name.value;
	const email = form.email.value;
	const message = form.message.value;

	// Envío de datos mediante email
	const mailtoLink = `mailto:correo@ejemplo.com?subject=Mensaje de ${name}&body=${message}%0D%0A%0D%0AEmail de contacto: ${email}`;

	window.location.href = mailtoLink;

	// Resetear formulario
	form.reset();

	// Mostrar mensaje de envío exitoso
	alert('Tu mensaje ha sido enviado exitosamente. ¡Gracias!');
});