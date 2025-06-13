<template>
      <div class="main-cont">
        <h2 class="subtitles">
          Visitanos y siguenos en nuestras redes sociales:
        </h2>
        <div class="icon-container">
          <div v-for="(icon, index) in icons" :key="index">
            <a :href="icon.href" target="_blank">
              <font-awesome-icon :icon="icon.name" class="icon titles"
            /></a>
          </div>
        </div>
      </div>
</template>

<script setup>
import {
  faWhatsapp,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
const icons = [
  {
    name: faWhatsapp,
    href: "https://www.facebook.com/InteligenciainfantilIN",
    title: "Whatsapp",
  },
  {
    name: faFacebook,
    href: "https://www.facebook.com/InteligenciainfantilIN",
    title: "Facebook",
  },
  {
    name: faYoutube,
    href: "https://www.facebook.com/InteligenciainfantilIN",
    title: "Youtube",
  },
  {
    name: faTiktok,
    href: "https://www.facebook.com/InteligenciainfantilIN",
    title: "Tikok",
  },
];
</script>

<style scoped>
.main-cont{
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.icon-container {
  display: flex;
  justify-content: space-between;
}
.icon {
  color: var(--primary-color);
  cursor: pointer;
}
</style>