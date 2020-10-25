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
        <v-row justify="center">
          <div class="col-lg-6">
            <h1></h1>
            <div class="expansion-panel-container">
              <h4>HyperDiem Cycling</h4>
              <v-expansion-panels popout light> 
                <v-expansion-panel> 
                  <v-expansion-panel-header>
                    <span>¿Quiénes somos?</span>
                    <template v-slot:actions>
                      <v-icon color="indigo">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      Tienda especializada en la comercialización de bicicletas y repuestos en la ciudad de Bogotá, Colombia. Nace por el hobby y el gusto que genera la actividad ciclística en todas sus actividades. El ciclismo como actividad deportiva ha venido generando espacio día tras día y es por ello que creamos HyperDiem Cycling y además no es solamente esta pasión por la bicicleta, sino también de introducirle un valor agregado a todo esto y complementarlo con servicio al cliente, atención personal, asesoría y en algunos veces instruir y capacitar al cliente.
                    </p> 
                    <div>
                      <v-btn
                        outlined
                        color="indigo lighten-1" 
                        href="/faq"
                      >FAQ</v-btn>
                      <v-btn
                        outlined
                        color="indigo lighten-1"
                        href="/contact-us"
                      >Contact Us</v-btn>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel> 
                  <v-expansion-panel-header>
                    <span>Misión</span>
                    <template v-slot:actions>
                      <v-icon color="indigo">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      Proveer el mejor servicio a los usuarios de bicicletas, atendiendo sus requerimientos y ofreciéndole buenos productos para lograr así un excelente satisfacción a nuestros clientes.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel> 
                  <v-expansion-panel-header>
                    <span>Visión</span>
                    <template v-slot:actions>
                      <v-icon color="indigo">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      Llegar a consolidarnos como una empresa en el comercio de bicicletas, destacando su seriedad, servicio y atención, además liderando la innovación de productos y repuestos que nos permitirán ser más competitivos.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel> 
                  <v-expansion-panel-header>
                    <span>Valores Corporativos</span>
                    <template v-slot:actions>
                      <v-icon color="indigo">
                        $expand
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p>
                      Atención personal que nos permita dar el mejor servicio al usuario.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <div class="logo-home">
                <v-img
                  src="/color-white.png"
                  height="300"
                  width="300"
                ></v-img>
              </div>
            </div> 
          </div>
          <div class="col-lg-6">
            <v-card
              class="mx-auto"
              max-width="400"
              light
              height="400"
            >

            </v-card>
          </div>
        </v-row>
      </v-container>
    </div>
    <div class="product-news">
      <v-container>
        <h1 class="text-center">Novedades</h1>
        <v-row>
          <div class="col-lg-4">
            <v-card
            class="mx-auto"
            max-width="344"
            light
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
              <v-card-title>
                Top western road trips
              </v-card-title>
              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Explore
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
          <div class="col-lg-4">
            <v-card
            class="mx-auto"
            max-width="344"
            light
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
              <v-card-title>
                Top western road trips
              </v-card-title>
              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Explore
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
          <div class="col-lg-4">
            <v-card
            class="mx-auto"
            max-width="344"
            light
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>
              <v-card-title>
                Top western road trips
              </v-card-title>
              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Explore
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </div>
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
    },
    data: () => ({
      show: false,
    })
  }
</script>

<style lang="scss">
  .main-section {
    background-color: white; 
  }
  .content-home {
    color: #000000;
    .expansion-panel-container {
      h4 {
        font-size: 30px;
        margin-left: 15px;
        margin-bottom: 20px;
      }
      span {
        color: #3f51b5;
      }
      .logo-home {
        margin-left: 20px;
        margin-top: 25px;
        @media screen and (max-width: 789px) {
          display: none; 
        }
      }
    }
  }
  .product-news {
    h1 {
      color: #000000;
    }
  }
</style>
