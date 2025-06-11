<template>
    <section class="cont-talleres">
      <h1 class="titles">Servicios complementarios</h1>
        <div class="flex-cont-talleres">
          <div class="maestros">
            <div class="container naranja bg-image-1">
              
              <h1 class="txt ">Para maestros</h1>
              <div class="space"></div>
              <p class="txt normal-text">Ofrecemos talleres y conferencias que entregan estrategias inclusivas, comprensión del perfil neurodivergente, recursos prácticos para el aula y herramientas para fomentar entornos más empáticos y efectivos.</p>
            </div>
          </div>
          <div class="familias">
            <div class="container verde bg-image-2">
              <h1 class="txt ">Para familias</h1>
              <div class="space"></div>
              <p class="txt normal-text">Brindamos herramientas claras para mejorar la convivencia, fortalecer el acompañamiento en casa y generar mayor comprensión del contexto emocional, social y educativo de sus hijos.</p>
            </div>
          </div>
        </div>
      </section>
</template>

<script setup>

</script>

<style  scoped>


.cont-talleres {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.flex-cont-talleres {
  display: flex;
  height: 500px;
}
@media screen and (max-width: 1000px) {
  .flex-cont-talleres {
    flex-direction: column;
  }
}
.maestros {
  flex: 1;
  height: 100%;
}
.container {
  position: relative;
  width: 100%;
  height: 100%;
  /* Ajusta la altura según tus necesidades */
  /* Color base con opacidad, aquí es rojo con 50% de opacidad */
  overflow: hidden;
}
.naranja {
  background-color: rgba(255, 102, 0, 0.856);
}
.verde {
  background-color: rgba(12, 231, 49, 1);
}

.azul {
  background-color: rgba(12, 114, 231, 0.856);
}
.bg-image-1::before,
.bg-image-2::before,
.bg-image-3::before,
.bg-image-4::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  /* Opacidad de la imagen */
  z-index: 1;
}
.bg-image-1::before {
  background-image: url("@/imgs/img-web/estimulacion-del-lenguaje.jpg");
}

.bg-image-2::before {
  flex: 1;
  background-image: url("@/imgs/img-web/familia2.jpeg");
}

.bg-image-3::before {
  flex: 1;
  background-image: url("@/imgs/img-web/familia 3.jpeg");
}

.bg-image-4::before {
  flex: 1;
  background-image: url("@/imgs/img-web/nino-con-jugue4tes.jpg");
}
.txt {
  color: white;
  z-index: 3;
  position: absolute;
  margin: 30px;
}
.familias {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.space {
  height: 100px;
}


</style>