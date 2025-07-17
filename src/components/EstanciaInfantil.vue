<template>
  <section class="estancia-infantil">
    <div class="intro">
      <h2>Estancia Infantil</h2>
      <p class="slogan">Mientras trabajas, ellos aprenden y se divierten</p>
      <p class="descripcion">
        Actividades, manualidades, juegos, aprendizaje y más. ¡Un espacio seguro
        y divertido para tus hijos!
      </p>
    </div>

<div class="beneficios">
  <div class="item">
    <div class="imagen-con-marco">
      <img
        src="@/imgs/img-web/juegos-de-manos_41699179_20230212214140.webp"
        alt="Niños jugando"
      />
    </div>
    <ul>
      <li><span>📘</span> Reforzamiento en lectura y escritura</li>
      <li><span>🧮</span> Reforzamiento en matemáticas</li>
      <li><span>🎯</span> Mejoramiento de enfoque y concentración</li>
      <li><span>🤝</span> Aprendizaje a través del juego y la convivencia</li>
    </ul>
  </div>
</div>

    <div class="info">
      <div class="detalle">
        <h3>Horario</h3>
        <p>8:00 AM - 1:00 PM</p>
      </div>
      <div class="detalle">
        <h3>Edad</h3>
        <p>6 a 12 años</p>
      </div>
      <div class="detalle">
        <h3>Ubicación</h3>
        <p>Rep. de Cuba 653, Ex Hipódromo 32330</p>
        <button
          style="
            border: none;
            background-color: transparent;
            text-decoration: underline;
            cursor: pointer;
            font-size: 20px;
            color: var(--secondary-color);
          "
          @click="scrollToMapa"
        >
          Ver mapa
        </button>
      </div>
      <div class="detalle contacto">
        <h3>Contáctanos</h3>
        <p>
          <a href="https://wa.me/526568268149" target="_blank" style="text-decoration: underline" 
            >📞 656 272 3100</a
          >
        </p>
        <p>
          <a href="https://m.me/InteligenciainfantilIN" target="_blank" style="text-decoration: underline" 
            >Facebook: Centro Humanista IN</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToMapa = () => {
  const section = document.getElementById("contacto");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.estancia-infantil {
  background: #f5faff;
  padding: 2rem;
  font-family: "Nunito", sans-serif;
}

.intro {
  text-align: center;
  color: var(--secondary-color);
}

.intro h2 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.intro .slogan {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.intro .descripcion {
  font-size: 1.1rem;
  color: #333;
}

.beneficios {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.item {
  max-width: 720px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 76, 151, 0.15);
  padding: 2rem;
  text-align: left;
  transition: transform 0.3s ease;
}

.item:hover {
  transform: translateY(-5px);
}



.item ul {
  list-style: none;
  padding: 0;
  color: #333;
  font-size: 1.05rem;
}

.item ul li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.item ul li span {
  font-size: 1.4rem;
  margin-right: 0.75rem;
 
}

.item img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.item ul {
  text-align: left;
  color: #333;
  padding-left: 1rem;
  list-style: disc;
}

.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
  gap: 1rem;
}

.detalle {
  flex: 1 1 200px;
  background: #e1f0ff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
 display: flex;
 flex-direction: column;
 gap: 16px;
}

.detalle h3 {
  color: var(--secondary-color);
  
}

.contacto a {
  font-weight: bold;
  color: var(--secondary-color);
  text-decoration: none;
}
</style>
