<template>
  <footer class="custom-footer">
    <div class="margin footer-cont ">
      <div class="footer-icons">
        <div class="footer-line"></div>
        <div v-for="(icon, index) in icons" :key="index">
          <a :href="icon.href" target="_blank">
            <font-awesome-icon :icon="icon.name" class="normal-text" style="color: white" /></a>
        </div>
        <div class="footer-line"></div>
      </div>
      <img src="/src/imgs/main-logo.png" alt="" class="logo">
      <h1 class="titles" style="color: white">
        Centro de Educación Integral Humanista IN
      </h1>
      <p class="normal-text" style="color: white">
        Contribuir a la felicidad de las familias
      </p>

      <div class="footer-links">
        <a href="" class="subtitles">Política de privacidad</a>
        <span class="separator">|</span>
        <a href="" class="subtitles">Nuestro equipo</a>
      </div>

      <div class="footer-line"></div>
    </div>
  </footer>
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
    title: "Tiktok",
  },
];
</script>

<style lang="scss" scoped>
.custom-footer {
  background-color: var(--primary-color);
  padding: 16px;
  text-align: center;
  color: white;
}
.footer-cont{
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.footer-line {
  width: 100%;
  height: 2px;
  background-color: white;
  display: flex;
  gap: 16px;
}

.footer-icons {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 16px 0;
  align-items: center;

}

.icon-link {
  font-size: 20px;
  color: white;
  transition: transform 0.2s;
}

.icon-link:hover {
  transform: scale(1.2);
  color: #fff;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.separator {
  color: white;
}

.logo {
  height: auto;
  width: 100px;
  margin: auto;
}
</style>
