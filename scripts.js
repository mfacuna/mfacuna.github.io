// Función para simular el efecto de escritura
function escribirTexto(elemento, texto, velocidad) {
    let i = 0;
    const intervaloH1 = setInterval(function () {
        elemento.innerHTML += texto.charAt(i);
        i++;
        if (i >= texto.length) {
            clearInterval(intervaloH1);
            // Una vez que ha terminado de agregar texto al h1, agregar texto al span
            agregarTextoAlSpan();
        }
    }, velocidad);

    function agregarTextoAlSpan() {
        const span = document.createElement("span");
        span.id = "span-titulo"; // Asignar un id al nuevo span
        elemento.appendChild(span);

        let j = 0;
        let textoSpan = 'Dev'
        const intervaloSpan = setInterval(function () {
            span.innerHTML += textoSpan.charAt(j);
            j++;
            if (j >= textoSpan.length) {
                clearInterval(intervaloSpan);
            }
        }, velocidad);
    }
}

const titulo = document.getElementById("titulo-header");
escribirTexto(titulo, "atias Acuña ", 80);