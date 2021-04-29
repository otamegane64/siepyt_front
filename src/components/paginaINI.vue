<template>
  <div class="hello">
    <div id="Imagen">
      <img alt="alumnos" src="../assets/alumnos.jpg"  >
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

#Imagen
{
  display: inline-block;
}
#Imagen img
{
  width:1000px;
  height: 500px;
  margin: 0px 0px 0px  20px;
  
}
</style>
