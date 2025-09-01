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

// Botón de perdón
document.getElementById('perdonarBtn').addEventListener('click', function() {
  const respuesta = document.getElementById('respuesta');
  respuesta.textContent = '¡Gracias por darme otra oportunidad! Prometo esforzarme para hacerte sonreír siempre. 😊';
  respuesta.classList.remove('oculto');
  this.style.display = 'none';
  lanzarConfetti();
});

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

// Eliminado todo el soporte de música y audio para evitar errores de CORS
// Música de fondo local (music.mp3 en la carpeta del proyecto)
document.addEventListener('DOMContentLoaded', function() {
  // Si quieres música, descomenta y pon tu archivo local o un enlace válido con CORS
  // const audio = document.createElement('audio');
  // audio.src = 'music/music.mp3';
  // audio.loop = true;
  // audio.volume = 0.25;
  // audio.id = 'bg-music';
  // document.body.appendChild(audio);
  // setTimeout(() => {
  //   audio.play().catch(() => {/* Autoplay bloqueado, se puede agregar un botón si se desea */});
  // }, 500);
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
      lanzarConfetti();
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

// Cartas diarias automáticas (7 días de la semana)
const cartasDiarias = [
  `¡Feliz lunes! Que esta semana empiece con mucha energía y sonrisas. Recuerda que siempre puedes contar conmigo. 💪😊`,
  `Martes de nuevos retos y oportunidades. Gracias por estar en mi vida y hacerla más especial. 🌱✨`,
  `Mitad de semana, miércoles. ¡Ánimo! Eres increíble y cada día lo demuestras más. 🌟`,
  `Jueves: ya casi es viernes. Gracias por tu paciencia y por cada momento compartido. ¡Te aprecio mucho! 💖`,
  `¡Por fin viernes! Espero que tu día esté lleno de alegría y buenas noticias. Disfruta mucho. 🎉`,
  `Sábado de descanso y aventuras. Ojalá podamos compartir más momentos juntos. ¡Feliz día! 🥳`,
  `Domingo: un día para recargar energías y soñar en grande. Gracias por ser tú. 🌈`
];

// Función para mostrar la carta del día según el día de la semana
function mostrarCartaDelDia() {
  const cartaContenedor = document.querySelector('#carta .carta-contenido');
  if (!cartaContenedor) return;
  const hoy = new Date();
  const diaSemana = hoy.getDay(); // 0=domingo, 1=lunes, ..., 6=sábado
  const indice = diaSemana === 0 ? 6 : diaSemana - 1;
  cartaContenedor.innerHTML = `
    <div class="carta-dia animar-pop">
      <div class="carta-emoji animar-corazon">💌</div>
      <div class="carta-texto">${cartasDiarias[indice].replace(/\n/g, '<br>')}</div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', mostrarCartaDelDia);
