<template>
  <section class="main-cont">
    <div class="text-cont">
      <h1 class="titles">Nuestros servicios</h1>
      <p class="normal-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam illum
        quod maiores quasi vitae quibusdam sit cupiditate ea dolor eaque.
      </p>
    </div>

    <div class="cont-services">
      <div v-for="(card, index) in visibleCards" :key="index" class="card-cont"
        :class="['card-cont', { 'animated': isMobile && showAll && index >= 2 }]">
        <p class="subtitles">{{ card.title }}</p>
        <img :src="card.img" :alt="card.alt" class="cont-serivce-card-img" />
        <p class="service-card-text normal-text">{{ card.text }}</p>
        <div class="card-buttons-cont" v-for="(button, bIndex) in card.buttons" :key="bIndex">
          <button @click="handleButtonAction(button.action, card)" :class="button.class">
            {{ button.buttonTitle }}
          </button>
        </div>

      </div>
    </div>
    <div class="cont-buton-mas">
      <button v-if="showMoreButton" class="ver-mas-btn" @click="handleShowMore">
        <p class="subtitles underline">Ver más...</p>
      </button>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import gestionEmocional from "@/imgs/img-web/gestion-emocional.jpg";
import matematicas from "@/imgs/img-web/matematicas.jpg";
import memoria from "@/imgs/img-web/memoria.jpg";
import lenguaje from "@/imgs/img-web/lenguaje.jpg";
import tea from "@/imgs/img-web/tea.jpg";
import tdha from "@/imgs/img-web/tdha.jpg";
import tda from "@/imgs/img-web/tda.jpg";
const servicesCards = [
  {
    title: "Estimulacion del lenguaje",
    img: lenguaje,
    alt: "Estimulacion del lenguaje",
    text: "¿Notas que a tu hijo le cuesta expresar lo que piensa o no logra hilar bien sus frases para comunicarse? A veces parece entender todo, pero al hablar, algo se traba. Estos pequeños signos pueden ser más que un simple retraso: podrían indicar una necesidad de apoyo específico para su desarrollo lingüístico.",
    file: "",
    buttons: [
      {
        buttonTitle: "Quiero contactarme",
        action: "scrollToContact",
        class: " btn primary-button",
      },
      {
        buttonTitle: "Ver PDF",
        action: "openFile",
        class: " btn secondary-button",
      },
    ],
  },
  {
    title: "TEA",
    img: tea,
    alt: "Estimulacion del lenguaje",
    text: "Tal vez tu hijo prefiere estar solo, se frustra fácilmente con los cambios o no parece responder igual al contacto o las emociones. A veces estos comportamientos se confunden con timidez o desinterés, pero podrían señalar algo más profundo que merece ser atendido a tiempo.",
    file: "",
    buttons: [
      {
        buttonTitle: "Quiero contactarme",
        action: "scrollToContact",
        class: " btn primary-button",
      },
      {
        buttonTitle: "Ver PDF",
        action: "openFile",
        class: " btn secondary-button",
      },
    ],
  },
  {
    title: "TDHA",
    img: tdha,
    alt: "Estimulacion del lenguaje",
    text: "Hay niños que parecen tener un motor encendido todo el día, que saltan de una idea a otra sin pausa, o que no logran concentrarse ni en sus juegos favoritos. Si sientes que todo se vuelve caótico, tal vez su atención necesita una mirada más especializada.",
    file: "",
    buttons: [
      {
        buttonTitle: "Quiero contactarme",
        action: "scrollToContact",
        class: "btn primary-button",
      },
      {
        buttonTitle: "Ver PDF",
        action: "openFile",
        class: " btn secondary-button",
      },
    ],
  },
  {
    title: "TDA",
    img: tda,
    alt: "Estimulacion del lenguaje",
    text: "Algunos niños no son inquietos, pero parecen ausentes. Su mente vaga, pierden detalles importantes, olvidan lo que se les dice o parecen desconectados. Estos gestos silenciosos también pueden ocultar un trastorno que afecta directamente su rendimiento y autoestima.",
    file: "",
    buttons: [
      {
        buttonTitle: "Quiero contactarme",
        action: "scrollToContact",
        class: "btn primary-button",
      },
      {
        buttonTitle: "Ver PDF",
        action: "openFile",
        class: " btn secondary-button",
      },
    ],
  },
  {
    title: "Gestion Emocional",
    img: gestionEmocional,
    alt: "Estimulacion del lenguaje",
    text: "¿Tu hijo se frustra con facilidad, llora o explota por situaciones pequeñas, o le cuesta calmarse después de una emoción intensa? Estas reacciones emocionales, si son frecuentes, podrían ser una señal de que necesita herramientas para comprender y regular lo que siente.",
    file: "",
    buttons: [
      {
        buttonTitle: "Quiero contactarme",
        action: "scrollToContact",
        class: "btn primary-button",
      },
      {
        buttonTitle: "Ver PDF",
        action: "openFile",
        class: " btn secondary-button",
      },
    ],
  },
  {
    title: "Entrenamiento neurologico para concentracion y memoria",
    img: memoria,
    alt: "Estimulacion del lenguaje",
    text: "Hay niños que entienden lo que se les explica, pero al día siguiente lo olvidan, o que necesitan muchas repeticiones para retener una idea. Si tu hijo se distrae con facilidad o tiene dificultad para recordar lo aprendido, es posible que su cerebro necesite un entrenamiento más enfocado.",
    file: "",
    buttons: [
      {
        buttonTitle: "Quiero contactarme",
        action: "scrollToContact",
        class: "btn primary-button",
      },
      {
        buttonTitle: "Ver PDF",
        action: "openFile",
        class: " btn secondary-button",
      },
    ],
  },
  {
    title: "Lectura, Escritura y Matematicas",
    img: matematicas,
    alt: "Estimulacion del lenguaje",
    text: "Cuando aprender a leer se vuelve frustrante, cuando escribir es un esfuerzo o los números no tienen sentido, es momento de observar. Estas áreas básicas del aprendizaje pueden convertirse en grandes barreras si no se detectan y abordan a tiempo.",
    file: "",
    buttons: [
      {
        buttonTitle: "Quiero contactarme",
        action: "scrollToContact",
        class: "btn primary-button",
      },
      {
        buttonTitle: "Ver PDF",
        action: "openFile",
        class: " btn secondary-button",
      },
    ],
  },
];
const showAll = ref(false);
const isMobile = ref(false);

const checkViewport = () => {
  isMobile.value = window.innerWidth <= 631;
};

const openFile = (card) => {
  if (card.file) {
    window.open(card.file, "_blank");
  } else {
    alert("Archivo no disponible.");
  }
};
const scrollToContact = () => {
  const section = document.getElementById("contacto");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const handleButtonAction = (action, card) => {
  if (action === "scrollToContact") {
    scrollToContact();
  } else if (action === "openFile") {
    openFile(card);
  }
};
onMounted(() => {
  checkViewport();
  window.addEventListener("resize", checkViewport);
});
const cards = ref(servicesCards);

const visibleCards = computed(() => {
  return isMobile.value && !showAll.value
    ? cards.value.slice(0, 2)
    : cards.value;
});
function handleShowMore() {
  showAll.value = true

}

const showMoreButton = computed(() => isMobile.value && !showAll.value);
</script>

<style scoped>
.main-cont {
  display: flex;
  flex-direction: column;
}

.text-cont {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cont-services {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 24px;
  overflow-y: auto;
  padding-right: 8px;
  scroll-behavior: smooth;
}

.card-cont {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  min-width: 200px;

  border-radius: 20px;
  padding: 16px;
}

.cont-serivce-card-img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  max-height: 166.8px;
}

@media screen and (max-width: 639px) {
  .cont-serivce-card-img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    max-height: 400px;
  }
}

.service-card-text {
  height: 170px;
  overflow-y: auto;
}

.card-buttons-cont {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
}

.cont-buton-mas {
  display: flex;
  justify-content: center;
}

.ver-mas-btn {
  border: none;
  background-color: transparent;
  width: fit-content;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ver-mas-btn:hover {
  transform: scale(1.15);
}

.underline {
  border-bottom: 2px solid var(--subtitle-color);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-cont {
  animation: fadeInUp 0.5s ease both;
}

.animated {
  animation: fadeInUp 0.5s ease both;
}
</style>
