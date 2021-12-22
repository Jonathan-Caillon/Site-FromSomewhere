<template>
  <header class="fs-header">
      <p class="fs-header__logo">
        FROM <span>SOMEWHERE</span>
      </p>
      <nav class="fs-header__navbar">
        <ul class="fs-header__navbar__nav">
          <a href="">
            <li class="fs-header__navbar__nav__items">
              HOME
            </li>
          </a>
          <a href="">
            <li class="fs-header__navbar__nav__items">
              PRESS
            </li>
          </a>
          <a href="">
            <li class="fs-header__navbar__nav__items">
              SUPPORT
            </li>
          </a>
        </ul>
      </nav>
    </header>
    <section class="fs-games">
      <div class="fs-games__item game1">
        <img src="../assets/img/ADIBOU.png" alt="">
        <img src="../assets/img/ADIBOU_TITLE.png" class="title" alt="">
      </div>
      <div class="fs-games__item game2 hovered">
        <img src="../assets/img/CLUBPENGUIN.png" alt="">
        <img src="../assets/img/CLUBPENGUIN_TITLE.png" class="title" alt="">
      </div>
      <div class="fs-games__item game3">
        <img src="../assets/img/MACRONTROL.png" alt="">
        <img src="../assets/img/MACRONTROL_TITLE.png" class="title" alt="">
      </div>
      <div class="fs-games__item game4">
        <img src="../assets/img/NUTNUT.png" alt="">
        <img src="../assets/img/NUTNUT_TITLE.png" class="title" alt="">
      </div>
      <div class="fs-games__item game5">
        <img src="../assets/img/SANANDREAS.png" alt="">
        <img src="../assets/img/SANANDREAS_TITLE.png" class="title" alt="">
      </div>
    </section>
    <!-- built files will be auto injected -->
    
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import "../assets/js/app.js";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
