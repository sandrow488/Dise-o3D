<template>
  <div class="Header">
    <div class="Titulo">
      <h1>Diseñador de Habitaciones 3D</h1>
      <p>Crea y personaliza tu espacio en 3D</p>
    </div>
    <div class="Botones">
      <button><img src="/public/Imagenes/papelera-de-reciclaje.png" alt="" />Limpiar Todo</button>
    </div>
  </div>
</template>

<style scoped>
.Botones button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #ff0800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.Botones button img {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}
.Botones button:hover {
  background-color: #e92222;
}
.Titulo h1 {
  margin: 0;
  font-size: 2rem;
}
.Titulo p {
  margin: 0;
  font-size: 1.2rem;
  color: #666;
}
.Header {
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Titulo {
  text-align: left;
  margin-bottom: 0;
}

.Botones {
  margin-top: -5px;
}
</style>
