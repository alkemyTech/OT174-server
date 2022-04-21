const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, SENDGRID_DOMAIN } = require("../config/config").development;

sgMail.setApiKey(SENDGRID_API_KEY);

const template= {
  
}


const sendEmail = (email) => {
  
  const msg = {
    to: email,
    from: SENDGRID_DOMAIN,
    subject: "Successfully registered",
    text: "You have successfully registered",
    // TODO: HACER TEMPLATE DE CORREO CON NOMBRE Y APELLIDO DEL USUARIO REGISTRADO
    html: `
        <div>
          <h1>Welcome a ONG !</h1>
          <h3>¡Hola,</h3>
          <p>You have successfully registered</p>
        </div>
      `,
  };

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (err) {
      console.error(err);
      if (err.response) {
        console.error(err.response.body);
      }
    }
  })();
};

console.log(  )

module.exports = { sendEmail };




