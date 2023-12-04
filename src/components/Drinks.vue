<template>
  <div class="category-container">
    <h1>{{ cocktail.strDrink }}</h1>
    <img @click="openDrinkDetail" :src="cocktail.strDrinkThumb" alt="" />
    <h3>{{ cocktail.strCategory }} | {{ cocktail.strAlcoholic }}</h3>
  </div>
</template>

<script>
export default {
  props: ["cocktail"],
  methods: {
    openDrinkDetail() {
      this.$router.push("/cocktail/" + this.cocktail.idDrink);
    },
  },
};
</script>

<style>
h1,
h3 {
  color: rgb(46, 46, 46);
}
img {
  border-radius: 80px;
}
</style>
