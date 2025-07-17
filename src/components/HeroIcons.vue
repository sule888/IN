<template>
    <div>
        <div class="cont">
        <Hero></Hero>
            <div class="margin"><Icons></Icons></div>
        </div>
    </div>
</template>

<script setup>
import Hero from './Hero.vue';
import Icons from './Icons.vue';
</script>

<style scoped>.margin {
  margin: 0 5%;
}
.cont{
    display: flex;
    flex-direction: column;
    gap: 32px;
}
</style>