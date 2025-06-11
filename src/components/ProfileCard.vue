<template>
  <div class="profile-card">
    <img :src="image" alt="Perfil" class="profile-image" />
    <p class="subtitles">{{ name }}</p>
    <p class="normal-text">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  name: String,
  description: String
});
</script>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 250px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
}

.profile-image {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 50%;
}

.profile-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.profile-description {
  font-size: 0.95rem;
  color: #555;
}
</style>