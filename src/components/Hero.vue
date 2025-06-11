<template>
  <section class="cont-hero">
    <img src="@/imgs/Heroimg.jpg" alt="Hero" class="hero-img" />
    <div class="cont-hero-text">
      <h1 class="titles">Centro de Educación Integral Humanista IN</h1>
      <button class=" btn-contacto primary-button ">Contáctanos</button>
    </div>
  </section>
</template>

<style scoped>
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
