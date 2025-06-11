<template>
  <section class="backgroud-cont-experience">
    <div class="cont-experience">
      <div class="princiapl"><img src="@/imgs/experience-profile.png" alt="" />
        <div class="text-experience-cont">
          <h4>Lorem ipsum dolor sit</h4>
          <h1>Clay Gonzalez</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequuntur corporis debitis! A, minima, molestiae vero laboriosam
            repellendus in ratione tempora blanditiis iste sit iusto fugiat
            officia ullam cum excepturi molestias.
          </h5>
        </div>
        <div class="team-container">
          <ProfileCard image="src\imgs\pefirls.jpg" name="Denzel Gonzales"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis..." />
          <ProfileCard image="src\imgs\pefirls.jpg" name="Jane Doe"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio." />
          <ProfileCard image="src\imgs\pefirls.jpg" name="Juan Pérez"
            description="Dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </div>

      </div>


    </div>
  </section>
</template>

<script setup>
import ProfileCard from './ProfileCard.vue';
</script>

<style scoped>
.backgroud-cont-experience {
  height: 400px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
}

.cont-experience {
  margin-top: 200px;
  margin: 5%;
  flex-direction: row;
  display: flex;
  column-gap: 5%;
  justify-content: space-around;
  align-items: center;
}

.cont-experience img {
  z-index: 1;
  height: 480px;
  margin-bottom: 60px;
}

.cont-experience .text-experience-cont {
  color: white;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 40%;
}

@media screen and (max-width: 1000px) {
  .cont-experience {
    flex-direction: column;
    height: 470px;
  }

  .cont-experience img {
    width: 200px;
    height: auto;
    margin-bottom: 60px;
  }

  .cont-experience .text-experience-cont {
    margin-bottom: 60px;
  }

}

.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

@media (max-width: 768px) {
  .team-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>