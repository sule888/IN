<template>
    <section>
      <div class="cont-contact">
        <div class="margin">
          <h1>Contactanos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
            officia sunt adipisci? Et, velit, voluptatum exercitationem eius vel
            repellendus alias doloremque officia eligendi fugiat corporis.
            Tempore voluptas unde neque sed ipsam cum ipsum consectetur eveniet
            vel recusandae, praesentium nobis quisquam quaerat amet a? Saepe
            consequuntur error eligendi, dolore optio quidem libero rem,
            excepturi iure, repellat delectus accusamus pariatur explicabo?
          </p>
          <div class="timeline">
            <div class="line"></div>
            <div v-for="(step, index) in steps" :key="index" class="step">
              <div class="icon glow">
                <font-awesome-icon :icon="step.name" class="icon-timeline" />
              </div>
              <p>{{ step.text }}</p>
            </div>
          </div>
          <div class="cont-contact-icons-media">
            <div class="cont-media">
              <font-awesome-icon :icon="faWhatsapp" class="icon-location" />
              656-5656-5656
            </div>
            <div class="cont-media">
              <font-awesome-icon
                :icon="faSquareEnvelope"
                class="icon-location"
              />
              correo.correo@gmail.com
            </div>
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
const steps = [
  {
    name: faPhone,
    text: "1.- Contactactanos con las opciones de contacto abajo ",
  },
  { name: faCalendar, text: "2.-Acordar cita de presenacion" },
  {
    name: faFileSignature,
    text: "3.- Explorar el lugar y los servicios que ofrecemos",
  },
  { name: faPeopleGroup, text: "4.- Comenzar con el proceso" },
];
</script>

<style scoped>
.cont-contact {
  margin: 100px 0 0 0;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  gap: 20px;
  background-color: #c4d7f9;
}
.margin {
  margin: 0 5%;
}
.timeline {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px auto;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
}
.line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: orange;
  /* Ajusta este color según tus necesidades */
  z-index: 1;
}

.step {
  position: relative;
  text-align: center;
  z-index: 2;
  margin: 10px;
  flex: 1;
  min-width: 100px;
  max-width: 300px;
}
.step .icon.glow {
  box-shadow: 90px var(--primary-color);
}

.step p {
  margin: 0;
  font-size: 14px;
}


.icon-timeline {
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 50px auto;
}

.cont-contact-icons-media {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 50px;
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
  }

  .line {
    display: none;
  }

  .step {
    margin-bottom: 20px;
  }
}

</style>