<script setup lang="ts">
import { d } from 'vue-router/dist/index-Cu9B0wDz.mjs'
</script>

<template>
  <div class="contenedor-muebles">
    <h1>Muebles</h1>
    <p class="instrucciones">Arrastra los muebles a la habitación para añadirlos</p>

    <div class="ListaObjetos">
      <div class="Card Sofa" draggable="true">
        <div class="Icono bg-gris">
          <img src="/public/Imagenes/Muebles/sofa-de-plazas.png" alt="Sofá" />
        </div>
        <div class="Contenido">
          <h2>Sofá</h2>
          <p>Arrastra para añadir</p>
        </div>
      </div>

      <div class="Card Mesa" draggable="true">
        <div class="Icono bg-naranja">
          <img src="/public/Imagenes/Muebles/mesa.png" alt="Mesa" />
        </div>
        <div class="Contenido">
          <h2>Mesa</h2>
          <p>Arrastra para añadir</p>
        </div>
      </div>

      <div class="Card Silla" draggable="true">
        <div class="Icono bg-amarillo">
          <img src="/public/Imagenes/Muebles/silla.png" alt="Silla" />
        </div>
        <div class="Contenido">
          <h2>Silla</h2>
          <p>Arrastra para añadir</p>
        </div>
      </div>

      <div class="Card Cama" draggable="true">
        <div class="Icono bg-purpura">
          <img src="/public/Imagenes/Muebles/cama.png" alt="Cama" />
        </div>
        <div class="Contenido">
          <h2>Cama</h2>
          <p>Arrastra para añadir</p>
        </div>
      </div>

      <div class="Card Lampara" draggable="true">
        <div class="Icono bg-amarillo">
          <img src="/public/Imagenes/Muebles/lampara-de-escritorio.png" alt="Lámpara" />
        </div>
        <div class="Contenido">
          <h2>Lámpara</h2>
          <p>Arrastra para añadir</p>
        </div>
      </div>

      <div class="Card Estanteria" draggable="true">
        <div class="Icono bg-verde">
          <img src="/public/Imagenes/Muebles/biblioteca.png" alt="Estantería" />
        </div>
        <div class="Contenido">
          <h2>Estantería</h2>
          <p>Arrastra para añadir</p>
        </div>
      </div>

      <div class="Controles">
        <h1>Controles:</h1>
        <ul>
          <li>Arrastra muebles desde aquí a la habitación</li>
          <li>Click y arrastra para mover muebles</li>
          <li>Doble click para eliminar</li>
          <li>Click Derecho + arrastrar: rotar vista</li>
          <li>Scroll: zoom</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Controles {
  margin-top: 30px;
}
.Controles h1 {
  font-size: 20px;
  margin-bottom: 10px;
}
.Controles ul {
  list-style-type: disc;
  padding-left: 20px;
}
.Controles li {
  margin-bottom: 6px;
  font-size: 14px;
  color: #475569;
}
.contenedor-muebles {
  padding: 20px;
  font-family: sans-serif;
  max-width: 380px;
}

h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

.instrucciones {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 24px;
}

.ListaObjetos {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.Card {
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  cursor: grab;
  transition: transform 0.1s;
}

.Card:active {
  cursor: grabbing;
  transform: scale(0.98);
}

.Icono {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
}

.Icono img {
  width: 28px;
  height: 28px;
}

.Contenido h2 {
  margin: 0;
  font-size: 16px;
  color: #1e293b;
}

.Contenido p {
  margin: 2px 0 0 0;
  font-size: 13px;
  color: #94a3b8;
}

.bg-gris {
  background-color: #f1f5f9;
}
.bg-naranja {
  background-color: #fef2f2;
}
.bg-purpura {
  background-color: #f5f3ff;
}
.bg-amarillo {
  background-color: #fefce8;
}
.bg-verde {
  background-color: #f0fdf4;
}
</style>
