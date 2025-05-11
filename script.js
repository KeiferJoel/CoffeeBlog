document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");
    const before_loader = document.querySelector("before_loader");


    //arreglar bug del loader 

    /*
    if (before_loader){



        setTimeout (() => {
            before_loader.style.opacity = "0";
            
        });
        
    }

*/

    if (loader) {
        // loader on top
        loader.style.position = "fixed";
        loader.style.zIndex = "9999";

      /*loader.style.backgroundColor = "rgba(255, 235, 201, 1)";
        loader.style.width = "100vw";
        loader.style.height = "100vh";*/

        // tiempo de espera
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500); 
        }, 3000); // Duración del loader en pantalla
    }
});





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


 // Definir el género y su emoji correspondiente
 const generoTipo = "Acción";  // Cambia esto según el género

 const generos = {
     "Acción": "🔥",
     "Terror": "👻",
     "Drama": "🎭",
     "Comedia": "😂",
     "Ciencia Ficción": "🚀",
     
     "Fantasía": "🧙‍♂️",
     "Romance": "❤️",
     "Aventura": "🌍"
 };

 // Mostrar género con emoji
 document.getElementById("genero").innerHTML = `${generos[generoTipo] || "📌"} ${generoTipo}`;

function donarCafe(url) {
  window.open(url, '_blank');
  const mensaje = document.getElementById('mensajeGracias');
  mensaje.classList.remove('hidden');
  mensaje.classList.add('animate-bounce');
  setTimeout(() => mensaje.classList.remove('animate-bounce'), 1000);
}
