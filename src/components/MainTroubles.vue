<template>
    <section class="bg-cont-main-troubles">
      <div class="margin">
        <h1 style="margin-bottom: 50px">Pricipales Problemas</h1>
        <div class="main-troubles-cont">
          <div
            class="column"
            v-for="(trouble, index) in mainTroubles"
            :key="trouble.id"
          >
            <div class="column-title" @click="toggleCont(index)">
              <p class="title">{{ trouble.title }}</p>
              <font-awesome-icon
                :icon="faChevronDown"
                style="font-size: 20px"
              />
            </div>
            <div
              class="content"
              :style="{
                height: visible[index] ? 'auto' : '0',
                opacity: visible[index] ? 1 : 0,
              }"
            >
              {{ trouble.content }}
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import {
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
const mainTroubles = [
  {
    id: 1,
    title: "Problema1",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.",
  },
  {
    id: 1,
    title: "Problema1",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.",
  },
  {
    id: 1,
    title: "Problema1",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.",
  },
  {
    id: 1,
    title: "Problema1",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.",
  },
  {
    id: 1,
    title: "Problema1",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.",
  },
  {
    id: 1,
    title: "Problema1",
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.",
  },
];
const visible = ref(mainTroubles.map(() => false));
const toggleCont = (index) => {
  visible.value[index] = !visible.value[index];
};

</script>

<style scoped>
.margin {
  margin: 0 5%;
}
.bg-cont-main-troubles {
  background-color: var(--secondary-color);
  color: white;
  padding: 100px 0;
}
.main-troubles-cont {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 25px;
  align-items: stretch;
}
@media (max-width: 768px) {
  .column {
    flex: 1 1 100%;
  }
}
.column {
  flex: 1 1 calc(50% - 25px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.column-title {
  display: flex;
  justify-content: space-between;
  border-bottom: #106dba 2px solid;
  padding: 20px 0;
  cursor: pointer;
}

.title {
  font-size: 20px;
  cursor: pointer;
}
.content {
  position: relative;
  z-index: 2;
  color: white;
  /* Color del texto o contenido para que sea visible */
  padding: 20px;
}
.content {
  overflow: hidden;
  height: 0;
  transition: height 1.5s ease, opacity 1.5s ease;
  opacity: 0;
}

.content[on-show="true"] {
  height: auto;
  opacity: 1;
}

</style>