const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const TOKEN_API = "token";
  const toEmail = "email";

  const mailDetails = {
    SecureToken: TOKEN_API,
    To: toEmail,
    From: document.getElementById("email").value,
    Subject: "Nuevo formulario enviado",
    Body: `
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}
    `,
  };

  Email.send(mailDetails)
    .then(function (response) {
      console.log("Correo electrónico enviado con éxito", response);
      form.reset();
    })
    .catch(function (error) {
      console.error("Error al enviar el correo electrónico:", error);
    });
});
