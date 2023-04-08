export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch:
      "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
  nacimiento: {
    valueMissing: "Este campo no puede estar vacío",
    customError: "Debes tener al menos 18 años de edad",
  },
  numero: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
  },
  direccion: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La dirección debe contener entre 10 a 40 caracteres.",
  },
  ciudad: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
  },
  estado: {
    valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
  },
};

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value);
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos 18 años de edad";
  }

  input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}


//FUNCION PARA VALIDAR Y ESCUCHAR LA FECHA DE NACIMIENTO.

const fecha = document.querySelector("#birth");
fecha.addEventListener("blur", (evento) => {
  validarNacimient(evento.target);
});

function validarNacimient(input) {
  const fechaCliente = new Date(input.value);;
  let mensaje = "";
  if(!mayorDeEda(fechaCliente)){
    mensaje = "Debes tener mas de 18 añosss" 
  }

  input.setCustomValidity(mensaje);
}


function mayorDeEda(fechaa) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fechaa.getUTCFullYear() + 18,
    fechaa.getUTCMonth(),
    fechaa.getUTCDate()
  );
  return diferenciaFechas < fechaActual;
}




// PRUEBAS DE ADDEVENTLISTENER

function modifyText() { // define la función "modifyText"
  const t2 = document.getElementById("t2"); // encontrar el elemento HTML con el ID "t2" y asignarlo a la variable "t2"
  const isNodeThree = t2.firstChild.nodeValue === "four"; // verificar si el primer hijo de "t2" tiene un valor de "four", y asignar el resultado a la variable "isNodeThree"
  t2.firstChild.nodeValue = isNodeThree ? "two" : "four"; // cambiar el valor del primer hijo de "t2" a "two" si "isNodeThree" es verdadero, o "four" si es falso
}

// Add event listener to table
const el = document.getElementById("outside"); // encontrar el elemento HTML con el ID "outside" y asignarlo a la variable "el"
el.addEventListener("click", modifyText); // agregar un "event listener" al elemento "el" que escucha los clics del usuario y ejecuta la función "modifyText"

