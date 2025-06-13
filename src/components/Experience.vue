<template>
  <section class="backgroud-cont-experience">
    <h1 class="titles" style="color: white; margin: 5% 5% 0; ">Conoce a nuestro equipo</h1>
    <div class="cont-experience">
      <div><img src="@/imgs/experience-profile.png" alt="" />
      </div>
      <div class="text-experience-cont">
        <h1 class="subtitles">Clay Gonzalez</h1>
        <p class="normal-text" style="color: white; text-align: center;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          consequuntur corporis debitis! A, minima, molestiae vero laboriosam
          repellendus in ratione tempora blanditiis iste sit iusto fugiat
          officia ullam cum excepturi molestias.
        </p>
        <a class="btn btn-pefil-principal" href="https://www.linkedin.com/feed/" target="_blank"
          rel="noopener noreferrer">Conocer mas</a>
      </div>

    </div>
    <div class="team-container">
      <ProfileCard image="src\imgs\img-web\pefirls.jpg" name="Juan Pérez"
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis..." />
      <ProfileCard image="src\imgs\img-web\pefirls.jpg" name="Jane Doe"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio." />
      <ProfileCard image="src\imgs\img-web\pefirls.jpg" name="Juan Pérez"
        description="Dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </div>
  </section>
</template>

<!--  
 -->

<script setup>
import ProfileCard from './ProfileCard.vue';
</script>

<style scoped>
.backgroud-cont-experience {
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-direction: column;
}

.cont-experience {
  margin: 0 5%;
  flex-direction: row;
  display: flex;
  column-gap: 32px;
  justify-content: space-around;
  align-items: center;
}

.cont-experience img {
  z-index: 1;
  height: 480px;
}

.text-experience-cont {
  color: white;
  padding: 0 ;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1 1 40%;
  align-items: center;
}

.btn-pefil-principal {
  color: var(--primary-color);
  background-color: white;
  width: auto;
}

.btn-pefil-principal:hover {
  background-color: var(--subtitle-color);
  color: white;
}

@media screen and (max-width: 850px) {
  .cont-experience {
    height: auto;
  }

  .cont-experience img {
    width: 320px;
    height: auto;

  }


}

@media screen and (max-width: 640px) {
  .cont-experience {
    height: auto;
    flex-direction: column;
    gap: 32px;
  }

  .cont-experience img {
    width: 200px;
    height: auto;

  }

}

.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 16px;
}

@media (max-width: 768px) {
  .team-container {
    flex-direction: column;
    align-items: center;

  }
}
</style>