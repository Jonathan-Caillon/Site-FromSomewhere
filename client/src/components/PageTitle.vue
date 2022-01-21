<template>
<div class="title-bloc">
  <h1>FROMSOMEWHERE</h1>
  <h2>{{ pageName }}</h2>
</div>
  
</template>

<script>

export default{
  name: "PageTitle",
  props: {
    pageName: String
  }
}

</script>

<style scoped>

.title-bloc{
  width: 100%;
}

.title-bloc h1 {
  padding-left: 2vw;
  color: #000;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 30px;
  font-family: var(--logo);
  text-transform: uppercase;
  margin: 10px;
  letter-spacing: -2.5px;
  pointer-events: none;
}

.title-bloc h2 {
  text-align: center;
  color: #000;
  font-size: 2rem;
  text-transform: uppercase;
}

@media screen and (max-width: 1000px) {
  .title-bloc h1{
    font-size: 25px;
  }
}

</style>