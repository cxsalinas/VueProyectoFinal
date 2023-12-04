<template>
  <h1 class="text-light mb-4">¿Buscas alguna bebida?</h1>
  <input
    type="text"
    class="buscar"
    placeholder="Encuentra tu favorito"
    v-model="search"
    @keyup.enter="searchData"
  />

  <Drinks
    v-for="cocktail in paginated"
    v-bind:key="cocktail.idDrink"
    v-bind:cocktail="cocktail"
  />

  <div class="text-center">
    <a @click="($event) => prev()" class="click me-5">Atras</a>
    <a @click="($event) => next()" class="click">Siguiente</a>
  </div>
</template>

<script>
import Drinks from "./Drinks.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      categories: [], //lo llenaremos con la api
      current: 1,
      pageSize: 3,
      search: "",
      cocktails: [],
    };
  },
  mounted() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => {
        this.cocktails = res.data.drinks;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Drinks,
  },

  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.cocktails.slice(this.indexStart, this.indexEnd);
    },
  },
  methods: {
    prev() {
      this.current--;
    },
    next() {
      this.current++;
    },
    searchData() {
      if (this.search) {
        axios
          .get(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
              this.search
          )
          .then((res) => {
            this.cocktails = res.data.drinks;
          });
      } else {
        swal({
          title: "Atencion",
          text: "Ingresa un texto",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.buscar {
  outline: none;
  font-size: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.119);
  color: rgb(0, 0, 0);
}
.buscar:hover {
  outline: none;
  border: none;
}
</style>
