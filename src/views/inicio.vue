<template>
  <div class="inicio">
     <div id="sesiones">
          <h2>Iniciar sesión</h2>
          <b-form @submit.prevent="entrarUsuario">
          <Input
          id="usuario"
          placeholder="Nombre de usuario"
          class="mb-2"
          />
           <Input         
          type="password"
          id="contraseña"
          placeholder="Contraseña"
          class="mb-2"
          />
          <b-button variant="link" class="float-right mt-3">¿Olvidaste tu contraseña?</b-button>
         <b-button type="submit" variant="success" class="float-right mt-3">Ingresar</b-button>
          </b-form>
          <h5>¿Eres nuevo?</h5>
          <h5>Registrate como:</h5>
          <b-button-group vertical>
          <b-button type=""  class="float-center ml-2" to="/tutor_registro" >Tutor</b-button>
          <b-button type="submit"  class="float-center ml-2" to="/maestro_registro">Maestro</b-button>
          <b-button type="submit"  class="float-center ml-2" to="/admin_registro">Administrador</b-button>
          </b-button-group>
      </div>
      <div id="imagen">
        <paginaINI/>
      </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import paginaINI from '@/components/paginaINI.vue'

export default {
  name: 'inicio',
  components: {
    paginaINI,
    Input
 
  }
}
</script>
<style >
#sesiones {
  background: #98C1D9;
  display: inline-block;
  padding: 20px;
  margin: 0 0 100px 0;
}
#sesiones b-button{
  color: #EE6C4D;
}
#imagen{
  display: inline-block;
  width: 200px; 
  height: 200px;
  margin: 0%;
  clear: inherit;
}
</style>
