<template>

<footer>
  <div class="footer-links">
    <p>Inspired by <a href="https://www.fromsoftware.jp/ww/">https://www.fromsoftware.jp/ww/</a></p>
    <p>
      >> <a href="https://github.com/frNicolasSCHMITT">SCHMITT Nicolas</a>
      >> <a href="https://github.com/Jonathan-Caillon">CAILLON Jonathan</a>
      >> <a href="https://github.com/AlexandreHamm">HAMM Alexandre</a>
    </p>
  </div>
  <div class="footer-social">
    <span>🐦</span>
    <span>📘</span>
    <span>📷</span>
    <span>⏯️</span>
  </div>
</footer>

</template>

<script>

export default {
  name: "PageFooter",
};

</script>

<style scoped>

footer {
  background-color: black;
  color: white;
  height: 15vh;
  width: 80vw;
  margin-left: 20vw;
  margin-top: 50px;
  /* position: fixed;
  bottom: 0;
  right: 0; */
  display: flex;
  justify-content: space-evenly;
}

a {
  color: white;
}

.footer-links{
  margin: 30px;
}

.footer-links p {
  margin-bottom: 20px;
}

.footer-social{
  margin-top: 30px;
}

.footer-social span {
  margin: 0 10px;
}
</style>