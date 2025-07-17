<template>
  <section class="cont-hero">
    <img src="@/imgs/Heroimg.jpg" alt="Hero" class="hero-img" />
    <div class="cont-hero-text">
      <h1 class="titles" style="color: white">
        Centro de Educación Integral Humanista IN
      </h1>
      <div class="cont-btns">
        <button @click="scrollToContact" class="btn-contacto primary-button">
         <p  class="normal-text" style="color: white;">Contactanos</p>
        </button> 
        <button  @click="scrollToEstancia" class="btn normal-text" style="background-color: var(--secondary-color); padding: 0.8rem 1.5rem;"><p  class="normal-text" style="color: white; ">Estancia Infantil</p></button>
      </div>
    </div>
  </section>
</template>
<script setup>
const scrollToContact = () => {
  const section = document.getElementById("contacto");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const scrollToEstancia = () => {
  const section = document.getElementById("estancia");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.cont-btns{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
}
.cont-hero {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cont-hero-text {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  color: white;
  padding: 48px;
  background: rgba(0, 0, 0, 0.4);
  gap: 1.5rem;
}

.btn-contacto {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}
</style>
