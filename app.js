const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];

const ulListaAmigos = document.getElementById("listaAmigos");

function agregarAmigo(){
    //console.log("hola")
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo() {
    const random = Match.Floor(Math.random() * listaAmigos.length);
    console.log(random)
}