<template>
  <div id="app">
    <div id="nav" >
     <img v-bind:src="require('./assets/logo.png')" alt="">
      <div id="nombre">   
        <h1>SIEPyT</h1>
        <h3>Sistema Intermediario entre profesores y tutores</h3>
      </div>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #3D5A80;
}
#nombre 
{
  background: #98C1D9;
  display: inline-table;
  margin: -50px 125px -200px  ;
}
#nav img{
  height: 75px;
  width: 100px;
  display: inline-table;
  margin: 10px 25px 15px;
  
}
#nombre h1
{
 color: #ffffff; 
 text-align: center;        
}
#nombre h3
{
 color: #ffffff; 
 text-align: center;        
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
