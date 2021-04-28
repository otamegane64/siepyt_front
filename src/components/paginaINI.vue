<template>
  <div class="hello">
    <div id="areaRegistro">
    <h2>inicio sesión</h2>
    <textarea placeholder="Nombre de usuario"></textarea>
    <textarea placeholder="Contraseña"></textarea>
    </div>
    <div id="Imagen">
      <img alt="alumnos" src="../assets/alumnos.jpg">
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'paginaINI',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#areaRegistro
{
background: #98C1D9;
display: inline-block;

}
#Imagen
{
  display: inline-block;
  width: 100px;
  height: 100px;
}

</style>
