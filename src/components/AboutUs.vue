<template>
  <div class="about-us-grid">
    <div
      v-for="(item, index) in itemsAboutUs"
      :key="index"
      :class="item.class"
     @click="item.img && openModalByItem(item)"
     
    >
      <img v-if="item.img" :src="item.img" :alt="item.alt" />
      <p v-else class="normal-text" style="color: white;">{{ item.text }}</p>
    </div>
  </div>

  <div
    v-if="showModal"
    class="modal-overlay"
    @click.self="closeModal"
    @touchstart="startTouch"
    @touchend="endTouch"
  >
    <div class="modal-content">
      <img :src="currentImage.img" :alt="currentImage.alt" class="modal-image" />
      <div class="thumbnail-gallery">
        <img
          v-for="(item, index) in galleryImages"
          :key="index"
          :src="item.img"
          :alt="item.alt"
          :class="{ active: index === currentIndex }"
          @click.stop="openModalByItem(item)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import madreConHija from "@/imgs/madre-con-hija-estudiando.jpg";
import reconocimientoFamilia from "@/imgs/reconocimiento-familia.jpg";
import familiasPiscina from "@/imgs/familias-en-piscina.jpg";
import ninoArmandoRompecabezas from "@/imgs/nino-armando-compecabezas.jpg";

const itemsAboutUs = [
  {
    img: "",
    alt: "",
    text: "Somos un espacio incluyente donde se estimula el desarrollo, la creatividad y la inteligencia. Se fomentan los talentos, capacidades, actitudes, aptitudes y destrezas a traves del juego, el movimiento, la empatia y la ceptacion positiva incondicional.",
    class: "text blue",
  },
  {
    img: madreConHija,
    alt: "Madre estudiando con su hija",
    text: "",
    class: "img1",
  },
  {
    img: reconocimientoFamilia,
    alt: "Foto de reconocimiento en familia",
    text: "",
    class: "img2",
  },
  {
    img: familiasPiscina,
    alt: "Familias en piscina",
    text: "",
    class: "img3",
  },
  {
    img: ninoArmandoRompecabezas,
    alt: "Niño armando rompecabezas",
    text: "",
    class: "img4",
  },
  {
    img: "",
    alt: "",
    text: "Contribuir a la felicidad de las familias",
    class: "text orange",
  },
];

const galleryImages = itemsAboutUs.filter((item) => item.img);

const showModal = ref(false);
const currentImage = ref(null);
const currentIndex = ref(0);

function closeModal() {
  showModal.value = false;
}
function openModalByItem(item) {
  const index = galleryImages.findIndex(i => i.img === item.img);
  if (index !== -1) {
    currentIndex.value = index;
    currentImage.value = galleryImages[index];
    showModal.value = true;
  }
}

let touchStartX = 0;
function startTouch(e) {
  touchStartX = e.changedTouches[0].clientX;
}
function endTouch(e) {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = Math.abs(touchStartX - touchEndX);
  if (diff > 50) closeModal();
}

</script>

<style scoped>
.about-us-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  grid-template-areas:  "orange img2 img3" "img1 img1 img4""blue blue blue" ;
}
@media screen and (min-width: 700px) {
 .about-us-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 16px;

  grid-template-areas:  "orange img2 img3" "img4 img1 blue"  ;
}
.about-us-grid .blue {
  background-color: #2196f3;
  color: white;
  padding: 24px;
  grid-area: blue;
    display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
}
}

.about-us-grid div {
  border-radius: 10px;
  overflow: clip;
  display: flex;
  align-items: stretch;
}

.about-us-grid img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-fit: cover;
}

.about-us-grid .green {
  background-color: #4caf50;
  color: white;
  padding: 20px;
  grid-area: green;
  cursor: pointer;
}

.about-us-grid .blue {
  background-color: #2196f3;
  color: white;
  padding: 24px;
  grid-area: blue;
  
}

.about-us-grid .orange {
  background-color: #ff9800;
  color: white;
  padding: 20px;
  grid-area: orange;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.about-us-grid .img1 {
  grid-area: img1;
  cursor: pointer;
}

.about-us-grid .img2 {
  grid-area: img2;
  cursor: pointer;
}

.about-us-grid .img3 {
  grid-area: img3;
  cursor: pointer;
}

.about-us-grid .img3 {
  transform: scale(20px);
}

.about-us-grid .img4 {
  grid-area: img4;
  cursor: pointer;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.80);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-image {
  max-height: 60vh;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px #000;
}

.thumbnail-gallery {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.thumbnail-gallery img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  opacity: 0.6;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.thumbnail-gallery img.active,
.thumbnail-gallery img:hover {
  opacity: 1;
  border-color: white;
}
</style>