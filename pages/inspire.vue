<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <v-btn>Botón</v-btn> 
      <div>
        <Carousel /> 
      </div>
      <div>
        <Form />  
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Carousel from '~/components/Carousel.vue'
import Form from '~/components/Form.vue'

export default {
  components: {
    Carousel,
    Form 
  }
}
</script>
