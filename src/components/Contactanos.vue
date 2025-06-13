<template>
  <section>
    <div class="cont-contact">
      <h1 class="titles">Contactanos</h1>
      <p class="normal-text">
        Identificar que un niño necesita apoyo puede generar muchas dudas, pero
        reconocerlo a tiempo marca una gran diferencia.
      </p>

      <p class="normal-text">
        Si al leer nuestra información sentiste que algo encaja con tu
        experiencia, estamos aquí para orientarte y acompañarte. Nuestro proceso
        es sencillo y está pensado para que te sientas seguro desde el inicio. A
        continuación te explicamos cómo empezar
      </p>
      <div class="timeline">
        <div class="line"></div>
        <div v-for="(step, index) in steps" :key="index" class="step">
          <div class="icon glow">
            <font-awesome-icon :icon="step.name" class="icon-timeline" />
          </div>
          <div class="step-content">
            <p class="subtitles">{{ step.titulo }}</p>
            <p class="normal-text">{{ step.text }}</p>
          </div>
        </div>
      </div>

      <div class="cont-contact-icons-media">
        <div v-for="(icon, index) in icons" :key="index"  class="contact-button-wrapper">
          <button class="btn primary-button"> 
            <a :href="icon.href" target="_blank" class="cont">
              <font-awesome-icon
                :icon="icon.name"
                class="icon-buttons titles"
              />
              <p class="normal-text" style="color: white;">{{ icon.title }}</p></a
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  faCalendar,
  faFileSignature,
  faPeopleGroup,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
const icons = [
  {
    name: faWhatsapp,
    href: "https://wa.me/526568268149",
    title: "656-826-8149",
  },
  {
    name: faFacebook,
    href: "https://m.me/InteligenciainfantilIN",
    title: "Centro humanista IN",
  },
];
const steps = [
  {
    name: faPhone,
    text: "Elige la forma de contacto que más te acomode.",
    titulo: "1.- Contáctanos",
  },
  {
    name: faCalendar,
    text: "Coordinamos una presentación personalizada.",
    titulo: "2.- Agenda una cita",
  },
  {
    name: faFileSignature,
    text: "Visita nuestras instalaciones y conoce nuestros servicios.",
    titulo: "3.- Conócenos",
  },
  {
    name: faPeopleGroup,
    text: "Damos inicio a un plan pensado en las necesidades del niño.",
    titulo: "4.- Apoyemos su desarrollo",
  },
];
</script>

<style scoped>
.cont-contact {
  display: flex;
  flex-direction: column;
  background-color: transparent;
  gap: 16px;
}

.timeline {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.step {
  position: relative;
  z-index: 2;
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  text-align: center;
  margin: 40px 16px;
}

.icon.glow {
  background-color: white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px var(--primary-color);
  z-index: 3;
}

.icon-timeline {
  font-size: 32px;
  color: var(--primary-color);
}

.step-content {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.cont-contact-icons-media {
  display: flex;
  justify-content: space-between;
  flex-direction:row;
  gap: 16px;
}

.cont {
  display: flex;
  gap: 16px;
  align-items: center;
  color: #4f4f4f;
}
.icon-buttons {
  color: white;
  font-size: 20px;
}

.cont-media {
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 20px;
  flex-wrap: wrap;
}

.icon-location {
  color: var(--secondary-color);
  font-size: 90px;
}

@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
    align-items: center;
  }

  .line {
    display: none;
  }

  .step {
    margin-bottom: 20px;
  }

}


@media (max-width:600px) {
   .cont-contact-icons-media {
  flex-direction:column;
  gap: 16px;
}
}
</style>
