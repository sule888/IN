<script setup>
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { faWhatsapp, faFacebook, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faChevronDown, faEnvelopeCircleCheck, faEnvelopeOpen, faFileSignature, faLocation, faLocationDot, faMailBulk, faMailForward, faPeopleGroup, faPhone, faPlay, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const icons = [
  { name: faWhatsapp, href: 'https://www.facebook.com/InteligenciainfantilIN', title: 'Whatsapp' },
  { name: faFacebook, href: 'https://www.facebook.com/InteligenciainfantilIN', title: 'Facebook' },
  { name: faYoutube, href: 'https://www.facebook.com/InteligenciainfantilIN', title: 'Youtube' },
  { name: faTiktok, href: 'https://www.facebook.com/InteligenciainfantilIN', title: 'Tikok' }
];
const itemsAboutUs = [
  {
    img: 'src/imgs/madre-con-hija-estudiando.jpg',
    alt: 'Madre estudiando con su hija',
    text: '',
    class: 'img1'
  },
  {
    img: 'src/imgs/reconocimiento-familia.jpg',
    alt: 'Foto de reconocimiento en familia',
    text: '',
    class: '  '
  },
  {
    img: 'src/imgs/familias-en-piscina.jpg',
    alt: 'Familias en piscina',
    text: '',
    class: 'img3'
  },
  {
    img: 'src/imgs/nino-armando-compecabezas.jpg',
    alt: '',
    text: '',
    class: 'img4'
  },
  {
    img: '',
    alt: '',
    text: 'In libero natoque cursus placerat primis est ridiculus vulputate.',
    class: 'text green'
  },
  {
    img: '',
    alt: '',
    text: 'est ridiculus vulputate.Maecenas maecenas accumsan ultricies lobortis fusce primis. Parturient aenean duis aliquet habitasse; felis lobortis congue. Sapien inceptos lobortis fringilla porta quis mattis orci ornare vel.',
    class: 'text blue'
  },
  {
    img: '',
    alt: '',
    text: 'In libero natoque cursus placerat primis est ridiculus vulputate.',
    class: 'text orange'
  }
];


const mainTroubles = [
  {
    id: 1, title: 'Problema1', content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.'
  },
  {
    id: 1, title: 'Problema1', content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.'
  },
  {
    id: 1, title: 'Problema1', content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.'
  },
  {
    id: 1, title: 'Problema1', content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.'
  },
  {
    id: 1, title: 'Problema1', content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.'
  },
  {
    id: 1, title: 'Problema1', content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Posuere penatibus augue inceptos aptent cursus accumsan blandit. Laoreet lectus vehicula id accumsan pharetus. Lobortis rutrum magna montes primis fermentum class. Morbi suspendisse felis molestie augue tempus aptent mauris enim. Bibendum commodo primis cubilia integer malesuada sit  eu. Euismod interdum libero dapibus dictumst amet. Donec natoque fringilla integer vitae nulla. Mi cubilia velit, quam ipsum litora hendrerit. Dapibus velit congue ut fusce fusce dolor phasellus.'
  },


]
const visible = ref(mainTroubles.map(() => false));

const toggleCont = (index) => {
  visible.value[index] = !visible.value[index];
};
const servicesCards = [
  {
    title: 'Estimulacion del lenguaje',
    img: 'src/imgs/img-web/estimulacion-del-lenguaje.jpg',
    alt: 'Estimulacion del lenguaje',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. est ridiculus vulputate.Maecenas maecenas accumsan ultricies lobortis fusce primis. Parturient aenean duis aliquet habitasse; felis lobortis congue. Sapien inceptos lobortis fringilla porta quis mattis orci ornare vel. ',
    file: '',
    buttons: [
      {
        buttonTitle: 'Quiero conocer mas ',
        action: 'openFile',
        class: ' btn primary-button'
      },
      {
        buttonTitle: 'Quiero contactarme',
        action: 'openFile',
        class: ' btn secondary-button'
      }
    ]
  },

  {
    title: 'TEA',
    img: 'src/imgs/img-web/estimulacion-del-lenguaje.jpg',
    alt: 'Estimulacion del lenguaje',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. est ridiculus vulputate.Maecenas maecenas accumsan ultricies lobortis fusce primis. Parturient aenean duis aliquet habitasse; felis lobortis congue. Sapien inceptos lobortis fringilla porta quis mattis orci ornare vel. ',
    file: '',
    buttons: [
      {
        buttonTitle: 'Quiero conocer mas ',
        action: 'openFile',
        class: ' btn primary-button'
      },
      {
        buttonTitle: 'Quiero contactarme',
        action: 'openFile',
        class: ' btn secondary-button'
      }
    ]
  },
  {
    title: 'TDHA',
    img: 'src/imgs/img-web/estimulacion-del-lenguaje.jpg',
    alt: 'Estimulacion del lenguaje',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: '',
    buttons: [
      {
        buttonTitle: 'Quiero conocer mas ',
        action: 'openFile',
        class: 'btn primary-button'
      },
      {
        buttonTitle: 'Quiero contactarme',
        action: 'openFile',
        class: ' btn secondary-button'
      }
    ]
  },
  {
    title: 'TDA',
    img: 'src/imgs/img-web/estimulacion-del-lenguaje.jpg',
    alt: 'Estimulacion del lenguaje',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: '',
    buttons: [
      {
        buttonTitle: 'Quiero conocer mas ',
        action: 'openFile',
        class: 'btn primary-button'
      },
      {
        buttonTitle: 'Quiero contactarme',
        action: 'openFile',
        class: ' btn secondary-button'
      }
    ]
  },
  {
    title: 'Gestion Emocional',
    img: 'src/imgs/img-web/estimulacion-del-lenguaje.jpg',
    alt: 'Estimulacion del lenguaje',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: '',
    buttons: [
      {
        buttonTitle: 'Quiero conocer mas ',
        action: 'openFile',
        class: 'btn primary-button'
      },
      {
        buttonTitle: 'Quiero contactarme',
        action: 'openFile',
        class: ' btn secondary-button'
      }
    ]
  },
  {
    title: 'Entrenamiento neurologico para concentracion y memoria',
    img: 'src/imgs/img-web/estimulacion-del-lenguaje.jpg',
    alt: 'Estimulacion del lenguaje',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: '',
    buttons: [
      {
        buttonTitle: 'Quiero conocer mas ',
        action: 'openFile',
        class: 'btn primary-button'
      },
      {
        buttonTitle: 'Quiero contactarme',
        action: 'openFile',
        class: ' btn secondary-button'
      }
    ]
  },
  {
    title: 'Lectura, Escritura y Matematicas',
    img: 'src/imgs/img-web/estimulacion-del-lenguaje.jpg',
    alt: 'Estimulacion del lenguaje',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: '',
    buttons: [
      {
        buttonTitle: 'Quiero conocer mas ',
        action: 'openFile',
        class: 'btn primary-button'
      },
      {
        buttonTitle: 'Quiero contactarme',
        action: 'openFile',
        class: ' btn secondary-button'
      }
    ]
  }
];
let videos = [
  {
    preview: 'src/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg',
    video: 'src/videos/SampleVideo_1280x720_1mb.mp4'
  },
  {
    preview: 'src/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg',
    video: 'src/videos/V1-0081_URSA Mini_1_2016-09-20_1006_C0031.mp4'
  },
  {
    preview: 'src/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg',
    video: 'src/videos/SampleVideo_1280x720_1mb.mp4'
  },
  {
    preview: 'src/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg',
    video: 'src/videos/V1-0081_URSA Mini_1_2016-09-20_1006_C0031.mp4'
  },
  {
    preview: 'src/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg',
    video: 'src/videos/SampleVideo_1280x720_1mb.mp4'
  },
  {
    preview: 'src/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg',
    video: 'src/videos/V1-0081_URSA Mini_1_2016-09-20_1006_C0031.mp4'
  },
  {
    preview: 'src/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg',
    video: 'src/videos/SampleVideo_1280x720_1mb.mp4'
  },
  {
    preview: 'src/imgs/img-web/lively-enthusiastic-determined-smiling-confident-asian-girl-ready-tackle-any-task-cross-fingers-chest-assertive-selfassured-smiling-satisfied-look-like-professional-white-background.jpg',
    video: 'src/videos/V1-0081_URSA Mini_1_2016-09-20_1006_C0031.mp4'
  },
];

const itemsFooter = [
  {
    title: 'Experiecia y recorrido',
    link: ''


  },
  {
    title: 'Mas informacion ',
    link: ''


  },
  {
    title: 'Ubicacion',
    link: ''


  },
  {
    title: 'Contactanos',
    link: ''


  },

]
const itemsFooterDudasFrecuentes = [
  {
    title: 'Duda 1',
    link: ''


  },
  {
    title: 'Duda 2',
    link: ''


  },
  {
    title: 'Duda 3 ',
    link: ''


  },
  {
    title: 'Duda 4',
    link: ''


  },

]
const steps = [
  { name: faPhone, text: "1.- Contactactanos con las opciones de contacto abajo " },
  { name: faCalendar, text: "2.-Acordar cita de presenacion" },
  { name: faFileSignature, text: "3.- Explorar el lugar y los servicios que ofrecemos" },
  { name: faPeopleGroup, text: "4.- Comenzar con el proceso" }
]
const videoSrc = ref(null);

function playVideo(video) {
  videoSrc.value = video;
}

function closeModal() {
  videoSrc.value = null;
}
const carouselBreakpoints = {
  1024: { itemsToShow: 4 },
  900: { itemsToShow: 3.5 },
  700: { itemsToShow: 3 },
  400: { itemsToShow: 2.5 },
  300: { itemsToShow: 1.2 }
};


const addressText = ref("Calle República de Cuba 653 sur y Ave. Insurgentes. Col. Ex-Hipódromo., Ciudad Juárez, Mexico");

function copyToClipboard() {
  navigator.clipboard.writeText(addressText.value)
    .then(() => {
      alert("Texto copiado al portapapeles");
    });
}
// let selectedVideo = null;
// let isModalOpen = false;
// function openModal(video) {
//   selectedVideo = video;
//   isModalOpen = true;
// }

// function closeModal() {
//   selectedVideo = null;
//   isModalOpen = false;
// } const colors = ['golos', 'golos', 'golos', 'golos'];


// b
</script>
<template>
  <div class="main-cont">
    <section class="cont-hero">
      <img src="/src/imgs/Heroimg.png" alt="Hero " />

      <div class="cont-hero-text">
        <h1 class="hero">Centro Humanista IN</h1>
        <div class="text-btn">
          <h1 class="font">Contribuir a la felicidad de las <br /> familias</h1>

          <button class=" btn secondary-button btn-contacto">
            <h5>Contactanos</h5>
          </button>
        </div>
      </div>
    </section>

    <div class="margin">

      <section style="margin: 100px 0; ">
        <h2 style="margin-bottom: 40px;">Visitanos y siguenos en nuestras redes sociales:</h2>

        <div class="icon-container">

          <div v-for="(icon, index) in icons" :key="index">


            <a :href='icon.href' target="_blank"> <font-awesome-icon :icon="icon.name" class="icon" /></a>
          </div>
        </div>

      </section>

      <section class="about-us-grid">
        <div v-for="(item, index) in itemsAboutUs" :key="index" :class="item.class">
          <img v-if="item.img" :src="item.img" :alt="item.alt" />
          <p v-else>{{ item.text }}</p>
        </div>
      </section>

      <section class="cont-mision-vision">

      </section>

      <section>
        <h1>Nuestros servicios</h1>
        <br>
        <h4 class="servic-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam illum quod maiores
          quasi
          vitae quibusdam sit cupiditate ea dolor eaque.</h4>
        <div class="cont-services">
          <div v-for="(card, index) in servicesCards " :key="index" class="card-cont">
            <h2 class="card-title">{{ card.title }}</h2>
            <img :src=card.img :alt=card.alt class="cont-serivce-card-img" />
            <div class="service-card-text">{{ card.text }}</div>
            <div class="card-buttons-cont" v-for="(button, index) in card.buttons" :key="index">
              <button :onclick="button.action" :class="button.class">{{ button.buttonTitle }}</button>
            </div>
          </div>
        </div>


      </section>

      <section class="cont-talleres">
        <div class="flex-cont-talleres">
          <div class="maestros">
            <div class="container naranja bg-image-1">
              <h1 class="txt">Para maestros</h1>
              <div class="space"></div>
              <h4 class="txt">golajdkhsa</h4>
            </div>
          </div>
          <div class="familias">
            <div class="container verde bg-image-2">
              <h1 class="txt">Para familias</h1>
              <div class="space"></div>
              <h4 class="txt">golajdkhsa</h4>
            </div>
            <div class="container azul bg-image-3">

              <h4 class="txt">golajdkhsa</h4>
            </div>
            <div class="container verde bg-image-4">

              <h4 class="txt">golajdkhsa</h4>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="bg-cont-main-troubles">

      <div class="margin">
        <h1 style="margin-bottom: 50px;">Pricipales Problemas</h1>
        <div class="main-troubles-cont">
          <div class="column" v-for="(trouble, index) in mainTroubles" :key="trouble.id">
            <div class="column-title" @click="toggleCont(index)">
              <p class="title">{{ trouble.title }}</p>
              <font-awesome-icon :icon="faChevronDown" style="font-size: 20px;" />

            </div>
            <div class="content" :style="{ height: visible[index] ? 'auto' : '0', opacity: visible[index] ? 1 : 0 }">
              {{ trouble.content }}
            </div>
          </div>
        </div>


      </div>
    </section>

    <section>
      <div class="margin">

        <div class="cont-carrousel">
          <h1 style="padding: 30px 0;">Testimonios</h1>
          <carousel :items-to-show="5.5" :breakpoints="carouselBreakpoints" gap="20px">
            <slide v-for="(video, index) in videos" :key="index">
              <div class="slide-content">
                <div class="video-preview">
                  <img :src="video.preview" :alt="`Preview for video ${index + 1}`" />
                  <button class="play-button" @click="playVideo(video.video)" aria-label="Play Video">
                    <font-awesome-icon :icon="faPlay" style="font-size: 50px; color: var(--primary-color)" />
                  </button>
                </div>
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
          <p style="margin-top: 50px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ex pariatur
            error
            necessitatibus
            distinctio
            perferendis quibusdam quo impedit excepturi ut doloremque sit modi totam aut sequi, porro quae? Numquam,
            voluptatum.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ex pariatur error necessitatibus
            distinctio
            perferendis quibusdam quo impedit excepturi ut doloremque sit modi totam aut sequi, porro quae? Numquam,
            voluptatum.
          </p>

          <div v-if="videoSrc" class="modal" @click.self="closeModal">
            <div class="modal-content">
              <button class="close" @click="closeModal" aria-label="Close Modal">&times;</button>
              <video controls autoplay>
                <source :src="videoSrc" type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="backgroud-cont-experience">
      <div class="cont-experience">
        <img src="/src/imgs/experience-profile.png" alt="" />
        <div class="text-experience-cont">
          <h4>Lorem ipsum dolor sit</h4>
          <h1>Clay Gonzalez</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur corporis
            debitis! A, minima, molestiae vero laboriosam repellendus in ratione tempora blanditiis
            iste sit iusto fugiat officia ullam cum excepturi molestias.
          </h5>
        </div>
      </div>
    </section>

    <div class="margin">
      <section>
        <div class="cont-map">
          <div style="width: 100%; padding: 0 30px;"><iframe width="100%" height="600" frameborder="0" scrolling="no"
              marginheight="0" marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Calle%20Rep%C3%BAblica%20de%20Cuba%20653%20sur%20y%20Ave.%20Insurgentes.%20Col.%20Ex-Hip%C3%B3dromo.,%20Ciudad%20Ju%C3%A1rez,%20Mexico+(INN)&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a></iframe></div>

          <div class="cont-map-buttons">
            <font-awesome-icon :icon="faLocation" class="icon-location" />
            <p @click="copyToClipboard" class="copyable">
              Calle República de Cuba 653 sur y Ave. Insurgentes. Col. Ex-Hipódromo., Ciudad Juárez, Mexico
            </p>
            <a target="_blank"
              href="https://www.google.com.mx/maps/search/Calle+Rep%C3%BAblica+de+Cuba+653+sur+y+Ave.+Insurgentes.+Col.+Ex-Hip%C3%B3dromo.+32330+Ciudad+Ju%C3%A1rez,+M%C3%A9xico/@31.7321784,-106.4643818,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"><button
                class="btn primary-button"> Abrir en Google Maps</button></a>

          </div>
        </div>

      </section>
    </div>
    <section>
      <div class="cont-contact">
        <div class="margin">
          <h1>Contactanos </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam officia sunt adipisci? Et, velit,
            voluptatum exercitationem eius vel repellendus alias doloremque officia eligendi fugiat corporis. Tempore
            voluptas unde neque sed ipsam cum ipsum consectetur eveniet vel recusandae, praesentium nobis quisquam
            quaerat
            amet a? Saepe consequuntur error eligendi, dolore optio quidem libero rem, excepturi iure, repellat delectus
            accusamus pariatur explicabo?</p>

          <div class="timeline">
            <div class="line"></div>
            <div v-for="(step, index) in steps" :key="index" class="step">
              <div class="icon glow">
                <font-awesome-icon :icon="step.name" class="icon-timeline" />
              </div>
              <p>{{ step.text }}</p>
            </div>
          </div>
          <div class="cont-contact-icons-media">
            <div class="cont-media"> <font-awesome-icon :icon="faWhatsapp" class="icon-location" /> 656-5656-5656</div>
            <div class="cont-media"> <font-awesome-icon :icon="faSquareEnvelope" class="icon-location" />
              correo.correo@gmail.com
            </div>

          </div>

        </div>

      </div>
    </section>

    <section>
      <div class="footer">
        <div class="margin">
          <div class="upper">
            <div class="child-cont">
              <img src="/src/imgs/main-logo.png" alt="Logo Cenrto Humanista" class="logo">
              <h3>Centro Humanista IN</h3>
            </div>
            <div class="child-cont">
              <img src="/src/imgs/mantarrallas-logo.png" alt="Mantarrallas Club Logo" class="logo">
              <h3>Mantarrallas Club Deportivo</h3>
            </div>
          </div>
          <div class="items">
            <div class="item-cont">
              <div class="icon-cont">
                <div style="flex-direction: column; display:flex;"><a :href='icon.href' target="_blank"
                    class="icon-cont" v-for="(icon, index) in icons" :key="index">
                    <font-awesome-icon :icon="icon.name" class="icon-footer" />
                    <p>{{ icon.title }}</p>
                  </a></div>


              </div>
            </div>
            <div class="item-cont">
              <div v-for="(item, index) in itemsFooter" :key="index" style=" padding: 20px 0;"><a :href="item.link"
                  target="_blank" class="item-footer-a">{{ item.title
                  }}</a></div>

            </div>
            <div class="item-cont">
              <div v-for="(item, index) in itemsFooterDudasFrecuentes" :key="index" style=" padding: 20px 0;"><a
                  :href="item.link" target="_blank" class="item-footer-a">{{
                    item.title
                  }}</a></div>

            </div>
          </div>
        </div>


      </div>
    </section>
  </div>

</template>





<!-- TODO: CAMBIAR HERO A PARTIR DE LOS 600PX -->

<style>
.slide-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-preview {
  position: relative;
  cursor: pointer;
}

.video-preview img {
  max-width: 100%;
  border-radius: 10px;
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

/* Estilos para el modal */
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































.main-cont {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.margin {
  margin: 0 5%;
}

.cont-hero {
  width: 100%;
  position: relative;
}

.cont-social-media {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
}




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

.card-title {
  margin-bottom: auto;
  height: 160px;
}

.servic-info {
  margin-bottom: 50px;
}

.cont-services {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: 20px;
}

.service-card-text {
  height: 150px;
  overflow-y: auto;
}

.card-cont {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 400px;
  min-width: 300px;
}

.cont-serivce-card-img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.card-buttons-cont {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
}

.cont-talleres {
  display: flex;
  flex-direction: column;
  gap: 50px;

  margin-bottom: 50px;
}

.flex-cont-talleres {
  display: flex;
  height: 900px;
  margin-top: 200px;
}

.maestros {
  flex: 1;
  height: 100%;
}

.familias {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.naranja {
  background-color: rgba(255, 102, 0, 0.856);
}

.verde {
  background-color: rgba(12, 231, 49, 0.856);
}

.azul {
  background-color: rgba(12, 114, 231, 0.856);
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  /* Ajusta la altura según tus necesidades */
  /* Color base con opacidad, aquí es rojo con 50% de opacidad */
  overflow: hidden;
}

.bg-image-1::before,
.bg-image-2::before,
.bg-image-3::before,
.bg-image-4::before {
  content: '';
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

.space {
  height: 100px;
}

.txt {
  color: white;
  z-index: 3;
  position: absolute;

  margin: 100px 20px;
}

.bg-image-1::before {
  background-image: url('src/imgs/img-web/estimulacion-del-lenguaje.jpg');
}

.bg-image-2::before {
  flex: 1;
  background-image: url('src/imgs/img-web/familia2.jpeg');
}

.bg-image-3::before {
  flex: 1;
  background-image: url('src/imgs/img-web/familia 3.jpeg');
}

.bg-image-4::before {
  flex: 1;

  background-image: url('src/imgs/img-web/nino-con-jugue4tes.jpg');
}

.content {
  position: relative;
  z-index: 2;
  color: white;
  /* Color del texto o contenido para que sea visible */
  padding: 20px;
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

  .flex-cont-talleres {
    flex-direction: column;
  }
}

@media (min-width: 768px) {}

@media (max-width: 767px) {


  .cont-hero-text .text-btn button {
    max-width: 200px;
  }
}


/* CODIGO NUEO QUE SE QUE USO: */


/* hero */
.cont-hero img {
  width: 100%;
  height: auto;
  filter: brightness(0.5);
  display: block;
}

.cont-hero-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  gap: 5%;
  padding: 1%;
}

.cont-hero-text .text-btn {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
}

.cont-hero-text .text-btn button {
  max-width: 400px;
}







/* iconos */
.icon-container {
  display: flex;

  justify-content: space-between;
  margin-bottom: 100px;
}

.icon {
  color: var(--primary-color);
  font-size: 50px;
  cursor: pointer;
}







/* acerca de GRID  */
.about-us-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;
  padding: 20px;
  grid-template-areas:
    "green img1 img2"
    "img3 img3 blue"
    "orange img4 img4";
}

.about-us-grid div {
  border-radius: 10px;
  overflow: clip;
  display: flex;
  align-items: stretch;

}

.about-us-grid img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-fit: cover;
}

.about-us-grid .green {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  grid-area: green;
}

.about-us-grid .blue {
  background-color: #2196F3;
  color: white;
  padding: 20px;
  grid-area: blue;
}

.about-us-grid .orange {
  background-color: #FF9800;
  color: white;
  padding: 20px;
  grid-area: orange;
}

.about-us-grid .img1 {
  grid-area: img1;
}

.about-us-grid .img2 {
  grid-area: img2;
}

.about-us-grid .img3 {
  grid-area: img3;
}

.about-us-grid .img4 {
  grid-area: img4;
}








/* Carousel part */
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



/* Estilos para el modal */
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





/* Principales problemas */
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

.title {
  font-size: 20px;
  cursor: pointer;
}

.column-title {
  display: flex;
  justify-content: space-between;
  border-bottom: #106dba 2px solid;
  padding: 20px 0;
  cursor: pointer;
}

.column {
  flex: 1 1 calc(50% - 25px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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

@media (max-width: 768px) {
  .column {
    flex: 1 1 100%;
  }
}













/* Mapa */

.cont-map {
  display: flex;
  gap: 50px;
  justify-content: space-between;
  margin-top: 200px;
}

.cont-map-buttons {
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 30px;
}

.copyable {
  cursor: pointer;
  color: black;
  transition: color 0.3s ease;
}

.copyable:hover {
  color: var(--secondary-color);

}

.icon-location {
  color: var(--secondary-color);
  font-size: 90px
}











/* Contactanos */
.cont-contact {
  margin: 100px 0 0 0;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  gap: 20px;
  background-color: #c4d7f9;
}

.cont-contact-icons-media {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 50px;
}

.cont-media {
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 20px;
  flex-wrap: wrap;
}

.timeline {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 50px auto;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
}

.line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: orange;
  /* Ajusta este color según tus necesidades */
  z-index: 1;
}

.step {
  position: relative;
  text-align: center;
  z-index: 2;
  margin: 10px;
  flex: 1;
  min-width: 100px;
  max-width: 300px;
}


.icon-timeline {
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 50px auto;
}

.step .icon.glow {
  box-shadow: 90px var(--primary-color);
}

.step p {
  margin: 0;
  font-size: 14px;
}

@media (max-width: 768px) {
  .timeline {
    flex-direction: column;
  }

  .line {
    display: none;
  }

  .step {
    margin-bottom: 20px;
  }
}




/* Footer */
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
  font-size: 19px
}

.items {
  display: flex;
  justify-content: space-between;
}
</style>
