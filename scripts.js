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
    let textoSpan = "Dev";
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


// Selecciona el elemento que deseas modificar después de hacer scroll
const menu = document.querySelector(".menu");

// Función que se ejecutará cuando se haga scroll
window.addEventListener("scroll", function () {
  var acercaDeSection = document.getElementById("acerca-de");
  var acercaDePosition = acercaDeSection.offsetTop;
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  if (scrollPosition > acercaDePosition - windowHeight / 2) {
    // Si el scroll está más allá del punto medio de la sección "acerca-de"
    acercaDeSection.classList.add("aparecer");
  }

  // Verifica la posición de desplazamiento (puedes ajustar el valor según tus necesidades)
  if (window.scrollY > 50) {
    // Agrega una clase cuando el scroll alcanza cierta posición
    menu.classList.add("scrolled");
  } else {
    // Elimina la clase cuando el scroll vuelve a la posición inicial
    menu.classList.remove("scrolled");
  }
});

// Verifica la posición del scroll al hacer scroll a portafolio
window.addEventListener("scroll", function() {
  // Obtén el elemento por su ID
  let portafolio = document.getElementById("portafolio");
  // Obtiene la posición actual del scroll
  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

  // Obtiene la altura de la ventana
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Calcula la mitad de la altura de la ventana
  var mitadVentana = windowHeight / 2;

  // Obtiene la posición superior e inferior del elemento
  var elementoPosSuperior = portafolio.offsetTop;
  var elementoPosInferior = elementoPosSuperior + portafolio.offsetHeight;

  // Verifica si el elemento está en la mitad de la ventana
  if (scrollPos + mitadVentana >= elementoPosSuperior && scrollPos + mitadVentana <= elementoPosInferior) {
      //console.log("El elemento está en la mitad de la ventana");
      portafolio.classList.add("aparecer");

  } else {
      //console.log("El elemento no está en la mitad de la ventana");
  }
});

// Verifica la posición del scroll al hacer scroll hasta el final para contacto.
window.addEventListener("scroll", function() {
  let contacto = document.getElementById("contacto");
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    contacto.classList.add("aparecer");
  }
});

function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    var targetPosition = element.getBoundingClientRect().top + window.scrollY;
    var startPosition = window.scrollY;
    var distance = targetPosition - startPosition;
    var startTime = null;
    var duration = 700; // Ajusta la duración total del desplazamiento

    function stepScroll(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;

      var easing = function (t) {
        // Puedes ajustar la ecuación de easing según tus preferencias
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      window.scrollTo(
        0,
        startPosition + easing(progress / duration) * distance
      );

      if (progress < duration) {
        requestAnimationFrame(stepScroll);
      }
    }

    requestAnimationFrame(stepScroll);
  }
}

function scrollToTop() {
  // Almacenar la posición actual del scroll
  var scrollPosition =
    window.scrollY || window.scrollY || document.documentElement.scrollTop;

  // Desplazar al tope de la página con velocidad reducida
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Restaurar la posición del scroll después de la transición
  window.scrollTo(0, scrollPosition);
}
