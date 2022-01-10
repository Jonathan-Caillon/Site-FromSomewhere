<template>
  <header class="fs-header">
    <router-link to="/">
      <p class="fs-header__logo">
        FROM <span>SOMEWHERE</span>
      </p>
    </router-link>
    <nav class="fs-header__navbar">
      <ul class="fs-header__navbar__nav">
        <router-link to="/">
          <li class="fs-header__navbar__nav__items">
            HOME
          </li>
        </router-link>
        <router-link to="/press">
          <li class="fs-header__navbar__nav__items">
            PRESS
          </li>
        </router-link>
        <router-link to="/support">
          <li class="fs-header__navbar__nav__items">
            SUPPORT
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
  <section class="fs-games">
    <div class="fs-games__item game1">
      <img src="../assets/img/ADIBOU.png" alt="" draggable="false">
      <img src="../assets/img/ADIBOU_TITLE.png" class="title" alt="" draggable="false">
      <div class="fs-games__item__desc"><span>A</span>DIBOU est un Action-RPG éducatif qui confrontera le joueur à des situations où sa survie dépendra de son assiduité lors des leçons. Il est à noter que le titre est classé PEGI-3 car, bien que les textes ne soient pas forcément adaptés aux plus jeunes, ces andouilles ne savent pas lire de toutes façons. </div>
      <button class="fs-games__item__close">
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
      </button>
      <ul class="fs-games__item__meta">
        <li class="meta1">"Apprendre pour survivre"<span>- Un mec normal</span></li>
        <li class="meta2">"L'éducation à la dure"<span>- Un mec normal</span></li>
        <li class="meta3">"Future réforme du système scolaire ?"<span>- Un mec normal</span></li>
        <li class="meta4">"Il va faire trembler les classes !"<span>- Un mec normal</span></li>
        <li class="meta5">"On est pas là pour faire des gâteaux !"<span>- Un mec normal</span></li>
        <li class="meta6">"Attendez, quoi ?"<span>- Un mec normal</span></li>
      </ul>
    </div>
    <div class="fs-games__item game2 hovered">
      <img src="../assets/img/CLUBPENGUIN.png" alt="" draggable="false">
      <img src="../assets/img/CLUBPENGUIN_TITLE.png" class="title" alt="" draggable="false">
      <div class="fs-games__item__desc"><span>C</span>lub Penguin sur PC est un jeu en ligne pour les plus jeunes qui permet de se créer un avatar pingouin et d'évoluer avec ses amis. Cette fois-ci, exit l'univers tout mignon et place à un traitement plus réaliste et viscéral de la vie de ces victimes de la nature, véritables punching-balls de la faune Arctique.</div>
      <button class="fs-games__item__close">
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
      </button>
      <ul class="fs-games__item__meta">
        <li class="meta1">"Bouleversant, émouvant"<span>- Un mec normal</span></li>
        <li class="meta2">"Un bel hommage à ces héros méconnus"<span>- Un mec normal</span></li>
        <li class="meta3">"Un changement radical"<span>- Un mec normal</span></li>
        <li class="meta4">"FPS le plus réaliste de l'année"<span>- Un mec normal</span></li>
        <li class="meta5">"Un véritable film"<span>- Un mec normal</span></li>
        <li class="meta6">"Ils ont un truc avec les pingouins ..."<span>- Un mec normal</span></li>
      </ul>
    </div>
    <div class="fs-games__item game3">
      <img src="../assets/img/MACRONTROL.png" alt="" draggable="false">
      <img src="../assets/img/MACRONTROL_TITLE.png" class="title" alt="" draggable="false">
      <div class="fs-games__item__desc"><span>A</span>vez vous toujours rêvé d'obtenir des pouvoirs absolus, imposer votre volonté à tous sans avoir à les mériter ? Avec Macrontrol, glissez-vous dans la peau d'un chef d'état-messie autoproclamé. Utilisez vos pouvoirs, comme celui du " Pass Sanitaire " qui permet de priver de leur liberté plus de 65 millions de PNJ dans ce monde ouvert !</div>
      <button class="fs-games__item__close">
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
      </button>
      <ul class="fs-games__item__meta">
        <li class="meta1">"Apprendre pour survivre"<span>- Un mec normal</span></li>
        <li class="meta2">"L'éducation à la dure"<span>- Un mec normal</span></li>
        <li class="meta3">"Future réforme du système scolaire ?"<span>- Un mec normal</span></li>
        <li class="meta4">"Il va faire trembler les classes !"<span>- Un mec normal</span></li>
        <li class="meta5">"On est pas là pour faire des gâteaux !"<span>- Un mec normal</span></li>
        <li class="meta6">"Attendez, quoi ?"<span>- Un mec normal</span></li>
      </ul>
    </div>
    <div class="fs-games__item game4">
      <img src="../assets/img/NUTNUT.png" alt="" draggable="false">
      <img src="../assets/img/NUTNUT_TITLE.png" class="title" alt="" draggable="false">
      <div class="fs-games__item__desc"><span>D</span>ans NutNut, incarnez un Pingu Marine repoussant les vagues sans fin des démoniaques envahisseurs Morsiens à l'aide de votre arsenal dévastateur ainsi que votre désir brûlant de vengeance !</div>
      <button class="fs-games__item__close">
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
      </button>
      <ul class="fs-games__item__meta">
        <li class="meta1">"Apprendre pour survivre"<span>- Un mec normal</span></li>
        <li class="meta2">"L'éducation à la dure"<span>- Un mec normal</span></li>
        <li class="meta3">"Future réforme du système scolaire ?"<span>- Un mec normal</span></li>
        <li class="meta4">"Il va faire trembler les classes !"<span>- Un mec normal</span></li>
        <li class="meta5">"On est pas là pour faire des gâteaux !"<span>- Un mec normal</span></li>
        <li class="meta6">"Attendez, quoi ?"<span>- Un mec normal</span></li>
      </ul>
    </div>
    <div class="fs-games__item game5">
      <img src="../assets/img/SANANDREAS.png" alt="" draggable="false">
      <img src="../assets/img/SANANDREAS_TITLE.png" class="title" alt="" draggable="false">
      <div class="fs-games__item__desc"><span>P</span>our faire patienter les fans après l'annonce de GTA MMXXV, FROM SOMEWHERE sort la version remastered de leur ancien succès, San Andréas. Fortement inspirés par Heavy Rain, le visuel est complètement différent sans avoir changé le moteur graphique, vous ne reconnaitrez plus votre jeux favori ! Non sérieusement ! Mérite totalement la tarification d'un nouveau jeu !</div>
      <button class="fs-games__item__close">
        <svg xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
      </button>
      <ul class="fs-games__item__meta">
        <li class="meta1">"Apprendre pour survivre"<span>- Un mec normal</span></li>
        <li class="meta2">"L'éducation à la dure"<span>- Un mec normal</span></li>
        <li class="meta3">"Future réforme du système scolaire ?"<span>- Un mec normal</span></li>
        <li class="meta4">"Il va faire trembler les classes !"<span>- Un mec normal</span></li>
        <li class="meta5">"On est pas là pour faire des gâteaux !"<span>- Un mec normal</span></li>
        <li class="meta6">"Attendez, quoi ?"<span>- Un mec normal</span></li>
      </ul>
    </div>
  </section>
  <footer class="fs-footer">
    <div class="fs-footer__socials">
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
      </a>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
      </a>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      <a href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
      </a>
    </div>
    <p class="fs-footer__credits">» <a href="">SCHMITT Nicolas</a> » <a href="https://github.com/Jonathan-Caillon">CAILLON Jonathan</a> » <a href="https://github.com/AlexandreHamm">HAMM Alexandre</a></p>
    <p class="fs-footer__inspiration">Inspired by <a href="https://www.fromsoftware.jp/ww/">https://www.fromsoftware.jp/ww/</a></p>
  </footer>
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
