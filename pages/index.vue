<template>
  <section class="main-section">
    <CarouselBanners /> 
    <div>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6">
            <div class="text-center">
                
            </div>  
          </v-col> 
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
  import CarouselBanners from '~/components/CarouselBanners.vue'

  export default {
    components: {
      CarouselBanners
    }
  } 
</script>

<style lang="scss">
  .main-section {
    background-color: white; 
  }
</style>
