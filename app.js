const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const listaAmigos = new Set(); // Usamos un Set para evitar duplicados

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("⚠️ Por favor, ingresa un nombre.");
        return;
    }

    if (listaAmigos.has(nombre)) {
        alert("⚠️ Este amigo ya está en la lista.");
        return;
    }

    listaAmigos.add(nombre);
    actualizarLista();
    inputAmigo.value = ""; // Limpia el campo después de agregar
}

function actualizarLista() {
    ulListaAmigos.innerHTML = ""; // Limpiamos la lista antes de actualizar
    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.size === 0) {
        alert("⚠️ No hay amigos en la lista para sortear.");
        return;
    }

    const amigosArray = Array.from(listaAmigos);
    const random = Math.floor(Math.random() * amigosArray.length);
    const amigoSecreto = amigosArray[random];

    ulResultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

function reiniciarLista() {
    listaAmigos.clear();
    ulListaAmigos.innerHTML = "";
    ulResultado.innerHTML = "";
}
