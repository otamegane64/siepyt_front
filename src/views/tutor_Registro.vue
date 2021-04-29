<template>
  <div id="cuadroR">
      <h2>Registro del tutor</h2>
      <b-form @submit.prevent="Registro_Tutor">
          <Input 
          label="Nombre(s):"
          id="nombre"
          placeholder="Ingrese nombre"
          mensajeError="El nombre es obligatorio!"
          class="mb-2"
          />
          <Input 
          label="Apellidos:"
          id="apellidos"
          placeholder="Ingrese apellido"
          mensajeError="El apellido es obligatorio!"
          class="mb-2"
          />
      
          <Input 
          label="fecha de nacimiento:"
          type="date"
          id="nombre"
          placeholder="Ingrese nombre"
          mensajeError="El nombre es obligatorio!"
          class="mb-2"
          />
          <Input 
          label="Correo"
          id="correo"
          placeholder="Ingrese correo"
          mensajeError="El correo es obligatorio es obligatorio!"
          class="mb-2"
          />
        <Input 
          label="Sexo"
          id="sexoM"
          type="radiobutton"
          mensajeError="El correo es obligatorio es obligatorio!"
          class="mb-2"
          />
      </b-form>

  </div>
</template>

<script>
import Input from '@/components/Input.vue'
export default {
 name: 'tutor_Registro',
  components: {
    Input
 
  }
}
</script>

<style>

#cuadroR{

    background: linear-gradient(to top,  #3D5A80, white);
}
</style>