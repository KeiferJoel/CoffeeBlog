const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cada mañana es una nueva oportunidad para brillar.",
    "Un buen café puede cambiar tu día, una buena actitud puede cambiar tu vida.",
    "Haz de cada momento algo inolvidable.",
    "El café y las ideas geniales siempre vienen juntos.",
    "No esperes a que las cosas pasen, haz que pasen.",
    "La vida es como una taza de café: a veces amarga, pero siempre llena de energía.",
    "El camino hacia el éxito comienza con un buen café.",
    "La inspiración está en los pequeños momentos del día."
];


function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseSeleccionada = frases[indiceAleatorio];
    document.getElementById("frase-inspiradora").textContent = fraseSeleccionada;
}


function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseSeleccionada = frases[indiceAleatorio];
    document.getElementById("frase-inspiradora").textContent = fraseSeleccionada;
}


window.onload = function() {
    mostrarFraseAleatoria(); 
    setInterval(mostrarFraseAleatoria, 5000); 
};