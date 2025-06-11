<template>
       <section>
      <div class="margin">
        <div class="cont-carrousel">
          <h1 style="padding: 30px 0">Testimonios</h1>
          <carousel
            :items-to-show="5.5"
            :breakpoints="carouselBreakpoints"
            gap="20px"
          >
            <slide v-for="(video, index) in videos" :key="index">
              <div class="slide-content">
                <div class="video-preview">
                  <img
                    :src="video.preview"
                    :alt="`Preview for video ${index + 1}`"
                  />
                  <button
                    class="play-button"
                    @click="playVideo(video.video)"
                    aria-label="Play Video"
                  >
                    <font-awesome-icon
                      :icon="faPlay"
                      style="font-size: 50px; color: var(--primary-color)"
                    />
                  </button>
                </div>
              </div>
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
          <p style="margin-top: 50px">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur ex pariatur error necessitatibus distinctio perferendis
            quibusdam quo impedit excepturi ut doloremque sit modi totam aut
            sequi, porro quae? Numquam, voluptatum. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Consectetur ex pariatur error
            necessitatibus distinctio perferendis quibusdam quo impedit
            excepturi ut doloremque sit modi totam aut sequi, porro quae?
            Numquam, voluptatum.
          </p>
          <div v-if="videoSrc" class="modal" @click.self="closeModal">
            <div class="modal-content">
              <button
                class="close"
                @click="closeModal"
                aria-label="Close Modal"
              >
                &times;
              </button>
              <video controls autoplay>
                <source :src="videoSrc" type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import {
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

import "vue3-carousel/dist/carousel.css";
import preview1 from "@/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg";
import video1 from "@/videos/SampleVideo_1280x720_1mb.mp4";
import video2 from "@/videos/V1-0081_URSA Mini_1_2016-09-20_1006_C0031.mp4";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const videoSrc = ref(null);
function playVideo(video) {
  videoSrc.value = video;
}
function closeModal() {
  videoSrc.value = null;
}
let videos = [
  { preview: preview1, video: video1 },
  { preview: preview1, video: video2 },
  { preview: preview1, video: video1 },
  { preview: preview1, video: video2 },
  { preview: preview1, video: video1 },
  { preview: preview1, video: video2 },
  { preview: preview1, video: video1 },
  { preview: preview1, video: video2 },
];
const carouselBreakpoints = {
  1024: { itemsToShow: 4 },
  900: { itemsToShow: 3.5 },
  700: { itemsToShow: 3 },
  400: { itemsToShow: 2.5 },
  300: { itemsToShow: 1.2 },
};
</script>

<style scoped>
.cont-carrousel {
  margin: 200px 0;
}

.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-content img {
  max-width: 100%;
  cursor: pointer;
}
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal-content {
  position: relative;
  width: 80%;
  max-width: 600px;
}

.modal-content video {
  width: 100%;
  border-radius: 10px;
}
.video-preview {
  position: relative;
  cursor: pointer;
}

.video-preview img {
  max-width: 100%;
  border-radius: 10px;
}

</style>