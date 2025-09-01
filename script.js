// Modo romántico/oscuro
// Cambiar el icono del botón según el modo: luna (🌙) para romántico, sol (☀️) para claro
function actualizarIconoModo() {
  const icono = document.getElementById('iconoModo');
  if (document.body.classList.contains('romantico')) {
    icono.textContent = '🌙';
  } else {
    icono.textContent = '☀️';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('modoRomanticoBtn');
  if (btn) {
    btn.addEventListener('click', function() {
      document.body.classList.toggle('romantico');
      actualizarIconoModo();
    });
    actualizarIconoModo();
  }
});

// Frases románticas (sin suponer relación de noviazgo)
const frases = [
  'Eres la casualidad más bonita que llegó a mi vida.',
  'No hay día que no piense en ti y en lo feliz que me haces.',
  'Tu sonrisa ilumina mis días más oscuros.',
  'Gracias por existir y por ser alguien tan especial para mí.',
  'Me encantaría compartir más momentos contigo.',
  'Eres mi sueño por descubrir.',
  'Contigo todo es más bonito.',
  'Eres una persona increíble.',
  'Tu alegría es contagiosa.',
  'Me inspiras a ser mejor cada día.',
  'Ojalá la vida nos regale más historias juntos.',
  'Tu presencia hace que todo tenga sentido.',
  'Eres la respuesta a muchas de mis preguntas.',
  'Gracias por dejarme conocerte.',
  'Me gustaría seguir sumando recuerdos a tu lado.'
];

function mostrarFraseRomantica() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById('fraseRomantica').textContent = frase;
}
mostrarFraseRomantica();

// Confetti mejorado: cuadritos bonitos y llamativos
function lanzarConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  for (let i = 0; i < 36; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    // Colores pastel y vibrantes
    const colores = [
      '#e75480', '#ffb6c1', '#ffe066', '#43c6ac', '#a29bfe', '#fd79a8', '#fab1a0', '#55efc4', '#81ecec'
    ];
    el.style.background = colores[Math.floor(Math.random() * colores.length)];
    el.style.position = 'absolute';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = (10 + Math.random() * 30) + 'vh';
    el.style.width = (12 + Math.random() * 10) + 'px';
    el.style.height = el.style.width;
    el.style.opacity = 0.92;
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '0.5rem';
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
    el.style.zIndex = 9999;
    el.style.animation = `confetti-fall 1.6s cubic-bezier(.62,.28,.23,.99) forwards`;
    el.style.animationDelay = (Math.random() * 0.5) + 's';
    container.appendChild(el);
    setTimeout(() => { if (container.contains(el)) container.removeChild(el); }, 2200);
  }
}



function lanzarCorazones() {
  const container = document.body;
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.textContent = '💖';
    heart.className = 'corazon-flotante';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = (Math.random() * 1.5) + 's';
    container.appendChild(heart);
    setTimeout(() => { if (container.contains(heart)) container.removeChild(heart); }, 2500);
  }
}

// WhatsApp compartir (texto neutro y editable)
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const mensaje = encodeURIComponent(
    'Quería compartirte algo especial que hice para ti. Puedes verlo aquí: ' + window.location.href +
    '\n\nPD: Perdón si a veces soy dramático o pendejo, pero me importas mucho y quería expresarlo de una forma diferente. 😊'
  );
  const url = 'https://wa.me/?text=' + mensaje;
  window.open(url, '_blank');
});

// Funcionalidad de pestañas
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remover clase active de todos los botones y contenidos
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Agregar clase active al botón clicado y su contenido correspondiente
    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Crear estrellas
function crearEstrellas() {
  const estrellas = document.getElementById('estrellas');
  for(let i = 0; i < 5; i++) {
    const estrella = document.createElement('span');
    estrella.className = 'estrella';
    estrella.textContent = '⭐';
    estrella.style.animationDelay = (i * 0.2) + 's';
    estrellas.appendChild(estrella);
  }
}
crearEstrellas();

function mostrarSorpresaHelado() {
  // Elimina cualquier modal anterior
  let modal = document.getElementById('sorpresaModal');
  if (modal) modal.remove();

  modal = document.createElement('div');
  modal.id = 'sorpresaModal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.className = 'sorpresa-modal';
  modal.innerHTML = `
    <div class="sorpresa-contenido">
      <p>🍦 ¿Te gustaría ir por un helado conmigo? 😄</p>
      <div style="margin-top:1.2rem;">
        <button id="heladoSiBtn" class="big-btn" style="margin-right:0.7rem;">¡Sí!</button>
        <button id="heladoNoBtn" class="big-btn" style="margin-right:0.7rem;">No</button>
        <button id="bloquearBtn" class="big-btn" style="background:#e75480;color:#fff;">Bloquear</button>
      </div>
      <button id="sorpresaCerrarBtn" class="close-btn" aria-label="Cerrar">✖</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("modal-abierto");

  document.getElementById('heladoSiBtn').onclick = () => {
    mostrarSorpresaResultado('¡Me alegra mucho! ¿Cuál es tu sabor favorito? 🍦');
  };
  document.getElementById('heladoNoBtn').onclick = () => {
    mostrarSorpresaResultado('¡No pasa nada! Tal vez en otra ocasión. 😊');
  };
  document.getElementById('bloquearBtn').onclick = () => {
    mostrarSorpresaResultado('😱 ¡Oh no! Espero que solo sea una broma... 🚫');
  };
  document.getElementById('sorpresaCerrarBtn').onclick = cerrarSorpresaModal;

  // Accesibilidad: cerrar con Escape
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarSorpresaModal();
  });
  document.getElementById('heladoSiBtn').focus();
}

function mostrarSorpresaResultado(mensaje) {
  let modal = document.getElementById('sorpresaModal');
  if (modal) {
    modal.querySelector('.sorpresa-contenido').innerHTML = `
      <p>${mensaje}</p>
      <button id="sorpresaCerrarBtn" class="big-btn" aria-label="Cerrar">Cerrar</button>
    `;
    document.getElementById('sorpresaCerrarBtn').onclick = cerrarSorpresaModal;
    document.getElementById('sorpresaCerrarBtn').focus();
  }
}

function cerrarSorpresaModal() {
  let modal = document.getElementById('sorpresaModal');
  if (modal) modal.remove();
  document.body.classList.remove('modal-abierto');
}

// Ventana de bienvenida creativa
document.addEventListener("DOMContentLoaded", () => {
  const bienvenida = document.getElementById("bienvenida");
  const empezarBtn = document.getElementById("empezarBtn");
  if (bienvenida && empezarBtn) {
    document.body.classList.add("modal-abierto");
    empezarBtn.focus();
    empezarBtn.addEventListener("click", () => {
      bienvenida.style.display = "none";
      document.body.classList.remove("modal-abierto");
      // Enfoca la primera pestaña accesible
      const firstTab = document.querySelector(".tab-btn");
      if (firstTab) firstTab.focus();
    });
    // Accesibilidad: cerrar con Enter o barra espaciadora
    empezarBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        empezarBtn.click();
      }
    });
  }
});

// Mostrar el botón de sorpresa solo después de perdonar
document.addEventListener('DOMContentLoaded', function() {
  const perdonarBtn = document.getElementById('perdonarBtn');
  const respuesta = document.getElementById('respuesta');

  if (perdonarBtn && respuesta) {
    perdonarBtn.addEventListener('click', function() {
      respuesta.textContent = '¡Gracias por darme otra oportunidad! Prometo esforzarme para hacerte sonreír siempre. 😊';
      respuesta.classList.remove('oculto');
      perdonarBtn.style.display = 'none';

      // Crear y mostrar el botón de sorpresa si no existe
      if (!document.getElementById('surpriseBtn')) {
        const surpriseBtn = document.createElement('button');
        surpriseBtn.id = 'surpriseBtn';
        surpriseBtn.className = 'surprise-btn';
        surpriseBtn.setAttribute('aria-label', 'Sorpresa divertida');
        surpriseBtn.textContent = '🎁 Sorpresa';
        surpriseBtn.style.display = 'block';
        surpriseBtn.style.margin = '1.5rem auto 0 auto';
        surpriseBtn.style.textAlign = 'center';

        respuesta.parentNode.appendChild(surpriseBtn);

        surpriseBtn.addEventListener('click', function() {
          mostrarSorpresaHelado(function() {
            surpriseBtn.remove();
            mostrarCuestionarioEstrellas();
          });
        });
      }
    });
  }
});

// Modal de sorpresa
function mostrarSorpresaHelado(callback) {
  let modal = document.getElementById('sorpresaModal');
  if (modal) modal.remove();

  modal = document.createElement('div');
  modal.id = 'sorpresaModal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.className = 'sorpresa-modal';
  modal.innerHTML = `
    <div class="sorpresa-contenido animar-pop">
      <div class="sorpresa-emoji animar-bounce">🎁</div>
      <h3 style="font-size:1.5rem; margin-bottom:0.5rem;">¡Sorpresa especial para ti!</h3>
      <p style="font-size:1.1rem;">¿Te gustaría ir por un helado conmigo? <span class="animar-corazon">🍦❤️</span></p>
      <div style="margin-top:1.2rem;">
        <button id="heladoSiBtn" class="big-btn animar-btn" style="margin-right:0.7rem;">¡Sí!</button>
        <button id="heladoNoBtn" class="big-btn animar-btn" style="margin-right:0.7rem;">No</button>
        <button id="bloquearBtn" class="big-btn animar-btn" style="background:#e75480;color:#fff;">Bloquear</button>
      </div>
      <button id="sorpresaCerrarBtn" class="close-btn" aria-label="Cerrar" style="position:absolute;top:0.7rem;right:1rem;font-size:1.3rem;background:none;border:none;cursor:pointer;">✖</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("modal-abierto");

  document.getElementById('heladoSiBtn').onclick = () => {
    mostrarSorpresaResultado('¡Me alegra mucho! ¿Cuál es tu sabor favorito? 🍦', callback);
  };
  document.getElementById('heladoNoBtn').onclick = () => {
    mostrarSorpresaResultado('¡No pasa nada! Tal vez en otra ocasión. 😊', callback);
  };
  document.getElementById('bloquearBtn').onclick = () => {
    mostrarSorpresaResultado('😱 ¡Oh no! Espero que solo sea una broma... 🚫', callback);
  };
  document.getElementById('sorpresaCerrarBtn').onclick = () => {
    cerrarSorpresaModal();
    if (typeof callback === 'function') callback();
  };

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      cerrarSorpresaModal();
      if (typeof callback === 'function') callback();
    }
  });
  document.getElementById('heladoSiBtn').focus();
}

function mostrarSorpresaResultado(mensaje, callback) {
  let modal = document.getElementById('sorpresaModal');
  if (modal) {
    // Si el mensaje es el de "No", ofrece otras opciones y volver a elegir
    if (mensaje.includes('Tal vez en otra ocasión')) {
      modal.querySelector('.sorpresa-contenido').innerHTML = `
        <div class="sorpresa-emoji animar-bounce">🎁</div>
        <p style="font-size:1.1rem;">${mensaje}</p>
        <p style="margin-top:0.7rem;">¿Quizá prefieres salir a caminar, ver una película o volver a elegir?</p>
        <div style="margin-top:1.2rem;">
          <button id="opcionCaminarBtn" class="big-btn animar-btn" style="margin-right:0.7rem;">Caminar 🚶‍♂️</button>
          <button id="opcionPeliculaBtn" class="big-btn animar-btn" style="margin-right:0.7rem;">Película 🎬</button>
          <button id="volverElegirBtn" class="big-btn animar-btn" style="margin-right:0.7rem;">Volver a elegir</button>
          <button id="sorpresaCerrarBtn" class="big-btn animar-btn" aria-label="Cerrar">Cerrar</button>
        </div>
      `;
      document.getElementById('opcionCaminarBtn').onclick = () => {
        mostrarSorpresaResultado('¡Perfecto! Vamos a caminar y platicar. 🚶‍♂️😊', callback);
      };
      document.getElementById('opcionPeliculaBtn').onclick = () => {
        mostrarSorpresaResultado('¡Genial! ver una película a tu lado. 🎬🍿', callback);
      };
      document.getElementById('volverElegirBtn').onclick = () => {
        cerrarSorpresaModal();
        mostrarSorpresaHelado(callback);
      };
      document.getElementById('sorpresaCerrarBtn').onclick = () => {
        cerrarSorpresaModal();
        if (typeof callback === 'function') callback();
      };
      document.getElementById('opcionCaminarBtn').focus();
    } else {
      // Comportamiento normal para las otras opciones
      modal.querySelector('.sorpresa-contenido').innerHTML = `
        <div class="sorpresa-emoji animar-bounce">🎁</div>
        <p style="font-size:1.2rem;">${mensaje}</p>
        <button id="sorpresaCerrarBtn" class="big-btn animar-btn" aria-label="Cerrar" style="margin-top:1.2rem;">Cerrar</button>
      `;
      document.getElementById('sorpresaCerrarBtn').onclick = () => {
        cerrarSorpresaModal();
        if (typeof callback === 'function') callback();
      };
      document.getElementById('sorpresaCerrarBtn').focus();
    }
  }
}

// Cuestionario de estrellas al final
function mostrarCuestionarioEstrellas() {
  let modal = document.getElementById('cuestionarioEstrellas');
  if (modal) modal.remove();

  modal = document.createElement('div');
  modal.id = 'cuestionarioEstrellas';
  modal.className = 'sorpresa-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = `
    <div class="sorpresa-contenido">
      <h3>¿Cuántas estrellas le das al servicio? ⭐</h3>
      <div id="estrellasCuestionario" style="font-size:2rem; margin:1rem 0;">
        <span class="estrella-c" data-valor="1">☆</span>
        <span class="estrella-c" data-valor="2">☆</span>
        <span class="estrella-c" data-valor="3">☆</span>
        <span class="estrella-c" data-valor="4">☆</span>
        <span class="estrella-c" data-valor="5">☆</span>
      </div>
      <div id="mensajeEstrellas" style="margin-top:1rem;"></div>
      <button id="cerrarCuestionarioBtn" class="big-btn" aria-label="Cerrar">Cerrar</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("modal-abierto");

  // Manejo de estrellas
  const estrellas = modal.querySelectorAll('.estrella-c');
  estrellas.forEach(estrella => {
    estrella.addEventListener('mouseenter', function() {
      const valor = parseInt(this.getAttribute('data-valor'));
      estrellas.forEach((e, i) => {
        e.textContent = i < valor ? '★' : '☆';
      });
    });
    estrella.addEventListener('mouseleave', function() {
      estrellas.forEach(e => e.textContent = '☆');
    });
    estrella.addEventListener('click', function() {
      const valor = parseInt(this.getAttribute('data-valor'));
      document.getElementById('mensajeEstrellas').textContent = `¡Gracias por tu calificación de ${valor} estrella${valor > 1 ? 's' : ''}!`;
      estrellas.forEach((e, i) => {
        e.textContent = i < valor ? '★' : '☆';
      });
    });
  });

  document.getElementById('cerrarCuestionarioBtn').onclick = () => {
    modal.remove();
    document.body.classList.remove('modal-abierto');
  };
}

// Temas extra (asegúrate de tener el botón con id="temaExtraBtn" en tu HTML)
const temas = [
  '', // Default
  'tema-azul',
  'tema-verde',
  'tema-rosado'
];
let temaActual = 0;

const temaBtn = document.getElementById('temaExtraBtn');
if (temaBtn) {
  temaBtn.addEventListener('click', function() {
    // Quita solo la clase de tema anterior, sin tocar 'romantico'
    if (temas[temaActual]) document.body.classList.remove(temas[temaActual]);
    temaActual = (temaActual + 1) % temas.length;
    if (temas[temaActual]) document.body.classList.add(temas[temaActual]);
  });
}

// Efecto de máquina de escribir en ambas líneas de la carta diaria, más lento y en orden
function mostrarCartaDelDia() {
  const cartaContenedor = document.querySelector('#carta .carta-contenido');
  if (!cartaContenedor) return;
  const hoy = new Date();
  const diaSemana = hoy.getDay(); // 0=domingo, 1=lunes, ..., 6=sábado
  const cartasDiarias = [
    `¡Feliz lunes! Que esta semana empiece con mucha energía y sonrisas.\nRecuerda que siempre puedes contar conmigo. 💪😊`,
    `Martes de nuevos retos y oportunidades.\nGracias por estar en mi vida y hacerla más especial. 🌱✨`,
    `Mitad de semana, miércoles. ¡Ánimo!\nEres increíble y cada día lo demuestras más. 🌟`,
    `Jueves: ya casi es viernes.\nGracias por tu paciencia y por cada momento compartido. ¡Te aprecio mucho! 💖`,
    `¡Por fin viernes! Espero que tu día esté lleno de alegría y buenas noticias.\nDisfruta mucho. 🎉`,
    `Sábado de descanso y aventuras.\nOjalá podamos compartir más momentos juntos. ¡Feliz día! 🥳`,
    `Domingo: un día para recargar energías y soñar en grande.\nGracias por ser tú. 🌈`
  ];
  const indice = diaSemana === 0 ? 6 : diaSemana - 1;
  const texto = cartasDiarias[indice];
  const partes = texto.split('\n');
  const primeraLinea = partes[0];
  const segundaLinea = partes[1] || '';

  cartaContenedor.innerHTML = `
    <div class="carta-dia animar-pop">
      <div class="carta-emoji animar-corazon">💌</div>
      <div class="carta-texto">
        <span class="carta-typing"></span>
        <span class="carta-resto" style="display:none;"></span>
      </div>
    </div>
  `;

  const typingDiv = cartaContenedor.querySelector('.carta-typing');
  const restoDiv = cartaContenedor.querySelector('.carta-resto');
  let i = 0;
  function escribirPrimera() {
    typingDiv.textContent = primeraLinea.slice(0, i);
    i++;
    if (i <= primeraLinea.length) {
      setTimeout(escribirPrimera, 55);
    } else {
      restoDiv.textContent = segundaLinea;
      restoDiv.style.display = 'block';
    }
  }
  escribirPrimera();
}

document.addEventListener('DOMContentLoaded', mostrarCartaDelDia);

const poemasBienvenida = [
  "El Derecho me enseñó a argumentar, pero tú me enseñaste a sentir.",
  "Si pudiera apelar a tu corazón, lo haría todos los días.",
  "Entre leyes y códigos, tu sonrisa es mi mejor jurisprudencia.",
  "No hay sentencia más dulce que tu perdón.",
  "Mi mejor defensa: amarte sin reservas.",
  "En el tribunal de la vida, tú eres mi veredicto favorito.",
  "Que la justicia de tu cariño me absuelva siempre."
];

document.addEventListener("DOMContentLoaded", () => {
  const bienvenida = document.getElementById("bienvenida");
  const empezarBtn = document.getElementById("empezarBtn");
  const bienvenidaTexto = document.getElementById("bienvenidaTexto");
  if (bienvenida && empezarBtn) {
    document.body.classList.add("modal-abierto");
    empezarBtn.focus();
    empezarBtn.addEventListener("click", () => {
      bienvenida.style.display = "none";
      document.body.classList.remove("modal-abierto");
      // Enfoca la primera pestaña accesible
      const firstTab = document.querySelector(".tab-btn");
      if (firstTab) firstTab.focus();
    });
    // Accesibilidad: cerrar con Enter o barra espaciadora
    empezarBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        empezarBtn.click();
      }
    });
  }
  if (bienvenidaTexto) {
    const poema = poemasBienvenida[Math.floor(Math.random() * poemasBienvenida.length)];
    bienvenidaTexto.innerHTML += `<br><em style="display:block;margin-top:1.2rem;color:#e75480;">"${poema}"</em>`;
  }
});

const mensajesBienvenida = [
  "Hoy es un gran día para empezar de nuevo.",
  "Cada día es una nueva oportunidad para sonreír juntos.",
  "Gracias por estar aquí, hoy y siempre.",
  "Que este día esté lleno de alegría y amor.",
  "Hoy puede ser el mejor día de todos, si tú quieres.",
  "¡Bienvenida a un día más de cariño y sorpresas!",
  "Hoy, como siempre, eres mi mejor argumento."
];
document.addEventListener("DOMContentLoaded", () => {
  const bienvenidaTexto = document.getElementById("bienvenidaTexto");
  if (bienvenidaTexto) {
    const hoy = new Date();
    const dia = hoy.getDay();
    bienvenidaTexto.innerHTML = mensajesBienvenida[dia] + bienvenidaTexto.innerHTML;
  }
});

// Arreglar el botón de "Abrazar" para que funcione correctamente y no cause bugs
document.addEventListener('DOMContentLoaded', function() {
  const abrazarBtn = document.getElementById('abrazarBtn');
  if (abrazarBtn) {
    abrazarBtn.addEventListener('click', function() {
      if (document.querySelector('.sorpresa-modal')) return;
      let modal = document.createElement('div');
      modal.className = 'sorpresa-modal';
      modal.innerHTML = `
        <div class="sorpresa-contenido animar-pop" style="text-align:center;">
          <div style="font-size:3rem; margin-bottom:0.7rem; animation: abrazo-emoji 1.2s infinite alternate;">🤗💞</div>
          <h3 style="margin-bottom:0.5rem;">¡Abrazo virtual enviado!</h3>
          <p style="font-size:1.1rem;">Aunque no pueda abrazarte en persona, te mando todo mi cariño y energía positiva.<br>¡Espero que lo sientas! 💖</p>
          <button id="cerrarAbrazoBtn" class="big-btn abrazo-btn" style="margin-top:1.2rem;">Cerrar</button>
        </div>
      `;
      document.body.appendChild(modal);
      document.body.classList.add("modal-abierto");
      document.getElementById('cerrarAbrazoBtn').onclick = function() {
        modal.remove();
        document.body.classList.remove("modal-abierto");
      };
      modal.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          modal.remove();
          document.body.classList.remove("modal-abierto");
        }
      });
      document.getElementById('cerrarAbrazoBtn').focus();
    });
  }
});

// Juicio creativo para amigos que se gustan, y el botón sorpresa solo aparece al ser declarado inocente
document.addEventListener('DOMContentLoaded', function() {
  const perdonarBtn = document.getElementById('perdonarBtn');
  const respuesta = document.getElementById('respuesta');

  if (perdonarBtn && respuesta) {
    perdonarBtn.addEventListener('click', function() {
      // Mostrar el "Juicio especial" antes de perdonar
      if (document.querySelector('.sorpresa-modal')) return;
      let modal = document.createElement('div');
      modal.className = 'sorpresa-modal';
      modal.innerHTML = `
        <div class="sorpresa-contenido animar-pop" style="text-align:center;">
          <div style="font-size:2.2rem; margin-bottom:0.7rem; animation: abrazo-emoji 1.2s infinite alternate;">⚖️💖</div>
          <h3 style="margin-bottom:0.5rem;">Juicio ante el Tribunal de las Miradas</h3>
          <p>
            El acusado se presenta ante el jurado de las sonrisas y declara:<br>
            <em>
              "Admito que a veces cometo errores, pero cada día me esfuerzo por ser mejor, porque tú inspiras lo mejor de mí.<br>
              Si el cariño fuera delito, acepto mi condena con gusto."<br>
            </em>
          </p>
          <button id="defensaBtn" class="big-btn abrazo-btn" style="margin:1rem 0.5rem 0 0;">Escuchar defensa</button>
          <button id="veredictoBtn" class="big-btn abrazo-btn" style="margin:1rem 0 0 0;">Ir directo al veredicto</button>
        </div>
      `;
      document.body.appendChild(modal);
      document.body.classList.add("modal-abierto");

      document.getElementById('defensaBtn').onclick = function() {
        this.parentNode.innerHTML = `
          <div style="font-size:2.2rem; margin-bottom:0.7rem;">📚💌</div>
          <h3>Defensa apasionada</h3>
          <p>
            La defensa presenta como pruebas:<br>
            - Mensajes inesperados<br>
            - Risas compartidas<br>
            - Miradas que dicen más que mil palabras<br>
            - Y el deseo de crear recuerdos juntos<br>
            <br>
            ¿El jurado está listo para emitir su veredicto?
          </p>
          <button id="aceptarVeredictoBtn" class="big-btn abrazo-btn" style="margin-top:1.2rem;">Emitir veredicto</button>
        `;
        document.getElementById('aceptarVeredictoBtn').onclick = function() {
          mostrarOpcionesPerdon();
        };
      };

      document.getElementById('veredictoBtn').onclick = function() {
        mostrarOpcionesPerdon();
      };

      function mostrarOpcionesPerdon() {
        modal.querySelector('.sorpresa-contenido').innerHTML = `
          <div style="font-size:2.5rem; margin-bottom:0.7rem;">💖</div>
          <h3>Veredicto del jurado</h3>
          <p>¿Perdonas al acusado por ser tan pende...?</p>
          <button id="perdonarSiBtn" class="big-btn abrazo-btn" style="margin:1rem 0.5rem 0 0;">Sí, lo absuelvo 🤝</button>
          <button id="perdonarNoBtn" class="big-btn abrazo-btn" style="margin:1rem 0 0 0;">No, aún no</button>
        `;
        document.getElementById('perdonarSiBtn').onclick = function() {
          playSonido('perdon');
          mostrarVeredictoFinal(true);
        };
        document.getElementById('perdonarNoBtn').onclick = function() {
          playSonido('confetti');
          mostrarVeredictoFinal(false);
        };
      }

      function mostrarVeredictoFinal(perdonado) {
        if (perdonado) {
          modal.querySelector('.sorpresa-contenido').innerHTML = `
            <div style="font-size:2.5rem; margin-bottom:0.7rem;">🎉💖</div>
            <h3>¡Inocente y con futuro prometedor!</h3>
            <p>
              El tribunal declara:<br>
              <strong>¡Absuelto de todo cargo y merecedor de nuevas aventuras juntos!</strong><br>
              <br>
              ¿Lista para descubrir la sorpresa?
            </p>
            <button id="cerrarJuicioBtn" class="big-btn abrazo-btn" style="margin-top:1.2rem;">Ver sorpresa 🎁</button>
          `;
          document.getElementById('cerrarJuicioBtn').onclick = function() {
            modal.remove();
            document.body.classList.remove("modal-abierto");
            if (typeof lanzarConfetti === "function") lanzarConfetti();
            if (typeof lanzarCorazones === "function") lanzarCorazones();
            if (typeof playSonido === "function") playSonido('perdon'); // <-- SONIDO AQUÍ
            respuesta.textContent = '¡Gracias por darme otra oportunidad! Prometo que lo nuestro será cada vez más especial. 😊';
            respuesta.classList.remove('oculto');
            perdonarBtn.style.display = 'none';

            // Crear y mostrar el botón de sorpresa si no existe
            if (!document.getElementById('surpriseBtn')) {
              const surpriseBtn = document.createElement('button');
              surpriseBtn.id = 'surpriseBtn';
              surpriseBtn.className = 'surprise-btn';
              surpriseBtn.setAttribute('aria-label', 'Sorpresa divertida');
              surpriseBtn.textContent = '🎁 Sorpresa';
              surpriseBtn.style.display = 'block';
              surpriseBtn.style.margin = '1.5rem auto 0 auto';
              surpriseBtn.style.textAlign = 'center';
              respuesta.parentNode.appendChild(surpriseBtn);

              surpriseBtn.addEventListener('click', function() {
                mostrarSorpresaHelado(function() {
                  surpriseBtn.remove();
                  mostrarCuestionarioEstrellas();
                });
              });
            }
          };
        } else {
          modal.querySelector('.sorpresa-contenido').innerHTML = `
            <div style="font-size:2.5rem; margin-bottom:0.7rem;">😢</div>
            <h3>Veredicto final</h3>
            <p>
              El tribunal declara:<br>
              <strong>¡Culpable de pensar mucho en ti!</strong><br>
              <br>
              Entiendo tu decisión y seguiré esforzándome para ganarme tu confianza (y tu sonrisa). 💔
            </p>
            <button id="cerrarJuicioBtn" class="big-btn abrazo-btn" style="margin-top:1.2rem;">Cerrar</button>
          `;
          document.getElementById('cerrarJuicioBtn').onclick = function() {
            modal.remove();
            document.body.classList.remove("modal-abierto");
            respuesta.textContent = 'Gracias por escuchar mi defensa. Seguiré luchando por tu confianza y por más momentos juntos. 💔';
            respuesta.classList.remove('oculto');
            perdonarBtn.style.display = 'none';
          };
        }
      }
    });
  }
});

// Mejorar botón piropo
const piropos = [
  "Si la belleza fuera tiempo, tú serías la eternidad.",
  "¿Sabías que tienes el superpoder de alegrar mi día con una sonrisa?",
  "No eres Google, pero tienes todo lo que busco.",
  "Si fueras estrella, no habría noche oscura.",
  "Eres la casualidad más bonita que me pasó.",
  "Tu risa es mi melodía favorita.",
  "Si existiera un concurso de sonrisas, la tuya ganaría siempre.",
  "Contigo, cualquier día es especial.",
  "Tus ojos tienen la chispa que enciende mi mejor versión.",
  "Si los piropos fueran estrellas, contigo tendría un universo."
];
const piropoBtn = document.getElementById('piropoBtn');
if (piropoBtn) {
  piropoBtn.innerHTML = '💬 Enviar piropo';
  piropoBtn.addEventListener('click', function() {
    let modal = document.createElement('div');
    modal.className = 'sorpresa-modal';
    modal.innerHTML = `
      <div class="sorpresa-contenido animar-pop" style="text-align:center;">
        <div style="font-size:2.2rem; margin-bottom:0.7rem;">💬✨</div>
        <h3>Piropo para ti</h3>
        <p style="font-size:1.2rem; margin-bottom:1rem;">${piropos[Math.floor(Math.random() * piropos.length)]}</p>
        <button class="big-btn abrazo-btn" onclick="this.closest('.sorpresa-modal').remove();document.body.classList.remove('modal-abierto')" style="margin-top:1.2rem;">Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.classList.add("modal-abierto");
  });
}

function playSonido(tipo) {
  let audio = document.createElement('audio');
  if (tipo === 'perdon') audio.src = 'music/perdon.mp3';
  if (tipo === 'confetti') audio.src = 'music/confetti.mp3';
  audio.volume = 0.25;
  audio.play();
  setTimeout(() => audio.remove(), 2000);
}
