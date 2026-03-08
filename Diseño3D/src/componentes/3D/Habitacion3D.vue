<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue'
import { useThreeGame } from '../ThreeJS/useThree3D.js'

const canva = ref(null)
const { start } = useThreeGame(canva)
onMounted(() => {
  start()
})
</script>

<template>
  <div class="Habitacion3D">
    <canvas ref="canva" class="Canvas3D" style="width: 99%; height: 99%"></canvas>
  </div>
</template>
