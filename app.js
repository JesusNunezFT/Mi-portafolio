let toggle = document.querySelector(".toggle");
let topbar = document.querySelector(".topbar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

//now, we fix menu active class issue for mobile devices

function toggleMenu() {
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector(".main");
  navigation.classList.remove("active");
  main.classList.remove("active");
}

//variable

const nameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const mobileInput = document.querySelector("#mobile");
const mensajeInput = document.querySelector("#message");

const sendInput = document.querySelector("#send");

eventListeners();
function eventListeners() {
  nameInput.addEventListener("change", datos_Usuario);
  lastNameInput.addEventListener("change", datos_Usuario);
  emailInput.addEventListener("change", datos_Usuario);
  mobileInput.addEventListener("change", datos_Usuario);
  mensajeInput.addEventListener("change", datos_Usuario);

  sendInput.addEventListener('click', submit_form);

     

}

const datosObj = {
  name: "",
  lastname:"",
  mobile: "",  
  email: "",
  message:"",
}

function datos_Usuario(e) {
  datosObj[e.target.id] = e.target.value;

  console.log(datosObj);
}

function submit_form() {
 
  let objeto_texto = JSON.stringify(datosObj);
  localStorage.setItem(Date.now().toString(), objeto_texto );

  reiniciar_objeto();
  limpiar_html();
}

function reiniciar_objeto() {
  const datosObj = {
    name: "",
    lastname:"",
    mobile: "",  
    email: "",
    message:"",
  }
}

function limpiar_html() {
  nameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  mobileInput.value = "";
  mensajeInput.value = "";
}

