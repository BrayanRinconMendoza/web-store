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
    <div class="content-home">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8" md="6">
            <div>
              <h1>Quienes somos</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aspernatur nulla non laudantium labore, ipsa repudiandae, neque et, fuga possimus aliquid officia esse consequatur? Aspernatur modi laudantium quisquam fuga eveniet?</p>
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

  .content-home {
    color: #000000;
  }
</style>
