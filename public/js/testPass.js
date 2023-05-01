const inputs = document.getElementsByTagName("input");
const passwordError = document.getElementById("password-error");
const passwordError2 = document.getElementById("password-error-2");
const pass1 = document.getElementById("password");
const pass2 = document.getElementById("password2");
const registroBoton = document.getElementById("registroBoton");

let chek1 = 0;
let chek2 = 0;

const validatePassword = (value) => {
  var length = new RegExp("^(?=.{8,})");
  var elements = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");
  let message = "";
  if (!length.test(value)) {
    message = "Tu contraseña debe tener al menos 9 caracteres entre mayusculas, minusculas y numeros";
    chek1 = 0;
  } else {
    if (!elements.test(value)) {
      message = "Tu contraseña debe tener al menos 9 caracteres entre mayusculas, minusculas y numeros";
      chek1 = 0;
    } else {
      message = "";
      chek1 = 1;
    }
  }
  return message;
};

const samePasword = () => {
  let message = "";
  if (pass1.value == pass2.value) {
    message = "Las contraseñas ingresadas coinciden :)";
    chek2 = 1;
  } else {
    message = "Las contraseñas ingresadas no coinciden";
    chek2 = 0;
  };
  return message;
}

for (const input of inputs) {
  input.addEventListener("input", (evt) => {
    registroBoton.disabled = true;
    registroBoton.innerText="Completa los campos para poder registrarte"
    registroBoton.style.color = "white";
    registroBoton.style.backgroundColor = "#567178";

    const { name, value } = evt.target;
    if (name === "password") {
      passwordError.innerHTML = validatePassword(value);
    };
    if (name === "password" || name === "password2") {
      passwordError2.innerHTML = samePasword();
    };
    console.log(chek1, chek2)
    if (chek1 == 1 && chek2 == 1) {
      console.log("Boton habilitado");
      registroBoton.style.color = "white";
      registroBoton.style.backgroundColor = "#2F6673";
      registroBoton.innerText="Crear usuario"
      registroBoton.disabled = false;
    };
  });
}
