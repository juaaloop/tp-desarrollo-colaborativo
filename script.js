
let votos = 0

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

boton.addEventListener("click", function(){

votos = votos + 1

textoVotos.innerText = "Votos: " + votos


})


const form = document.getElementById("formPropuesta")

form.addEventListener("submit", function(e){
e.preventDefault();

let nombre = document.getElementById("nombre").value.trim();
let idea = document.getElementById("idea").value.trim();

let mensaje=document.getElementById("mensaje");
if(nombre === "" || idea === ""){
mensaje.innerText = "Completa todos los campos"
return;
}else{
    mensaje.innerText="Idea recibida, gracias por participar!"
}

})