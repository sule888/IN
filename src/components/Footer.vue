<template>
    <section>
      <div class="footer">
        <div class="margin">
          <div class="upper">
            <div class="child-cont">
              <img
                src="@/imgs/main-logo.png"
                alt="Logo Cenrto Humanista"
                class="logo"
              />
              <h3>Centro Humanista IN</h3>
            </div>
            <div class="child-cont">
              <img
                src="@/imgs/mantarrallas-logo.png"
                alt="Mantarrallas Club Logo"
                class="logo"
              />
              <h3>Mantarrallas Club Deportivo</h3>
            </div>
          </div>
          <div class="items">
            <div class="item-cont">
              <div class="icon-cont">
                <div style="flex-direction: column; display: flex">
                  <a
                    :href="icon.href"
                    target="_blank"
                    class="icon-cont"
                    v-for="(icon, index) in icons"
                    :key="index"
                  >
                    <font-awesome-icon :icon="icon.name" class="icon-footer" />
                    <p>{{ icon.title }}</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="item-cont">
              <div
                v-for="(item, index) in itemsFooter"
                :key="index"
                style="padding: 20px 0"
              >
                <a :href="item.link" target="_blank" class="item-footer-a">{{
                  item.title
                }}</a>
              </div>
            </div>
            <div class="item-cont">
              <div
                v-for="(item, index) in itemsFooterDudasFrecuentes"
                :key="index"
                style="padding: 20px 0"
              >
                <a :href="item.link" target="_blank" class="item-footer-a">{{
                  item.title
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
const itemsFooter = [
  { title: "Experiecia y recorrido", link: "" },
  { title: "Mas informacion ", link: "" },
  { title: "Ubicacion", link: "" },
  { title: "Contactanos", link: "" },
];
const itemsFooterDudasFrecuentes = [
  { title: "Duda 1", link: "" },
  { title: "Duda 2", link: "" },
  { title: "Duda 3 ", link: "" },
  { title: "Duda 4", link: "" },
];

</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--support-color);
  color: white;
  padding: 40px 0;
}

.upper {
  display: flex;
  justify-content: space-between;
}

.item-cont {
  display: flex;
  flex-direction: column;
}

.item-footer-a {
  color: white;
}

.logo {
  width: auto;
  height: 90px;
}

.child-cont {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-cont {
  display: flex;
  gap: 20px;
  align-items: center;
  color: white;
  font-size: 18px;
}

.icon-footer {
  color: white;
  padding: 20px 0;
}

.icon-footer:hover,
.icon-cont:hover {
  color: rgb(191, 191, 191);
  font-size: 19px;
}

.items {
  display: flex;
  justify-content: space-between;
}

.wrapr {
  display: flex;
  gap: 20px;
}

.wrapr .card {
  height: 500px;
  width: 300px;
  border-radius: 5px;
  background-color: #106dba;
  cursor: pointer;
  transition: 0.3s ease;
}

.wrapr:hover > :not(:hover) {
  filter: blur(1px);
  opacity: 0.6;
}
</style>