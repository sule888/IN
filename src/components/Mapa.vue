<template>
    <section>
      <h1 class="titles" style="margin-bottom: 32px;">Como encontrarnos:</h1>
        <div class="cont-map">
          <div style="width: 100%; ">
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Calle%20Rep%C3%BAblica%20de%20Cuba%20653%20sur%20y%20Ave.%20Insurgentes.%20Col.%20Ex-Hip%C3%B3dromo.,%20Ciudad%20Ju%C3%A1rez,%20Mexico+(INN)&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ><a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a></iframe
            >
          </div>
          <div class="cont-map-buttons">
            <font-awesome-icon :icon="faLocation" class="icon-location" />
            <p @click="copyToClipboard" class="copyable normal-text">
              Calle República de Cuba 653 sur y Ave. Insurgentes. Col.
              Ex-Hipódromo., Ciudad Juárez, Mexico
            </p>
            <a
              target="_blank"
              href="https://www.google.com.mx/maps/search/Calle+Rep%C3%BAblica+de+Cuba+653+sur+y+Ave.+Insurgentes.+Col.+Ex-Hip%C3%B3dromo.+32330+Ciudad+Ju%C3%A1rez,+M%C3%A9xico@31.7321784,-106.4643818,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
              ><button class="btn primary-button normal-text">
                Abrir en Google Maps
              </button></a
            >
          </div>
        </div>
      </section>
</template>

<script setup>
import { ref } from "vue";
import {
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
const addressText = ref(
  "Calle República de Cuba 653 sur y Ave. Insurgentes. Col. Ex-Hipódromo., Ciudad Juárez, Mexico"
);
function copyToClipboard() {
  navigator.clipboard.writeText(addressText.value).then(() => {
    alert("Texto copiado al portapapeles");
  });
} 


</script>

<style scoped>
.cont-map {
  display: flex;
  justify-content: space-between;
  gap: 32px;
}
@media screen and (max-width: 800px) {
.cont-map {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-direction: column-reverse;
}
}


.cont-map-buttons {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 32px;

}

.copyable {
  cursor: pointer;
  color: black;
  transition: color 0.3s ease;
}

.copyable:hover {
  color: var(--secondary-color);
}

.icon-location {
  color: var(--primary-color);
  font-size: 90px;
}
</style>