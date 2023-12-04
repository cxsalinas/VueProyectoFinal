<template>
  <div>
    <div>
      <nav>
        <div class="inicio">
          <router-link class="aInicio" to="/">Inicio</router-link>
        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.inicio {
  background-color: rgba(250, 100, 0, 0.562);
  height: 60px;
  font-size: 40px;
}
.aInicio {
  color: rgb(255, 255, 255);
}
</style>
