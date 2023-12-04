<template>
  <div>
    <div v-if="cocktail">
      <h1>{{ cocktail[0].strDrink }}</h1>
      <img :src="cocktail[0].strDrinkThumb" alt="" />
      <h2>Instructions</h2>
      <p>{{ cocktail[0].strInstructions }}</p>
      <h2>Ingredients</h2>
      <div>
        <p v-for="index in 15" :key="index">
          <div v-if="cocktail[0]['strIngredient' + index] != null">
            {{ cocktail[0]["strIngredient" + index] }} -
            {{ cocktail[0]["strMeasure" + index] }}
          </div>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cocktail: null,
    };
  },
  mounted() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` +
          this.$route.params.idDrink
      )
      .then((res) => {
        this.cocktail = res.data.drinks;
        console.log(
          "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
            this.$route.params.idDrink
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
