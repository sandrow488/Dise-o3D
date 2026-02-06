<script setup>
import Header from './componentes/Basico/Header.vue'
import Diseño from './componentes/View/Diseño.vue'
import Habitacion3D from './componentes/3D/Habitacion3D.vue'
</script>

<template>
  <div id="app">
    <Header />
    <div style="display: flex">
      <Diseño />
      <Habitacion3D />
    </div>
  </div>
</template>

<style scoped></style>
