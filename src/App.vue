<script setup>
import Hero from "./components/Hero.vue";
import Icons from "./components/Icons.vue";
import AboutUs from "./components/AboutUs.vue";
import NuestrosServicios from "./components/NuestrosServicios.vue";
import Talleres from "./components/Talleres.vue";
import MainTroubles from "./components/MainTroubles.vue";
import Testimonios from "./components/Testimonios.vue";
import Experience from "./components/Experience.vue";
import Mapa from "./components/Mapa.vue";
import Contactanos from "./components/Contactanos.vue";
import Footer from "./components/Footer.vue";
import HeroIcons from "./components/HeroIcons.vue";
import EstanciaInfantil from "./components/EstanciaInfantil.vue";

</script>
<template>
  <div class="main-cont">
    <HeroIcons></HeroIcons>
    <div class="separation-category-margin" id="estancia"></div>
      <EstanciaInfantil></EstanciaInfantil>
    <div class="margin">
      
      <div class="separation-category-margin"></div>
      <AboutUs></AboutUs>
      <div class="separation-category-margin"></div>
      <NuestrosServicios></NuestrosServicios>
      <div class="separation-category-margin"></div>
      <Talleres></Talleres>
      <div class="separation-category-margin"></div>

    </div>
    <!-- <Testimonios></Testimonios> -->
    <Experience></Experience>
    <div class="margin">
      <div class="separation-category-margin" ></div>
      <Mapa id="mapa"></Mapa>
      <div class="separation-category-margin"></div>
    </div>
    <div class="margin" id="contacto">
      <Contactanos />
    </div>
    <div class="separation-category-margin"></div>
    <Footer></Footer>
  </div>
</template>
<style>
.separation-category-margin {
  margin: 64px 0px;
}

.main-cont {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.margin {
  margin: 0 5%;
}
</style>
