<template>
<div class="title-bloc">
  <h1>FROM SOMEWHERE</h1>
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
  padding-left: 5%;
  margin-bottom: 10px;
}

.title-bloc h1 {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 10px;
}

.title-bloc h2 {
  font-size: 2rem;
}

</style>