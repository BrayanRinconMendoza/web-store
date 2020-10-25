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
                      Tienda especializada en la comercialización de bicicletas y repuestos en la ciudad de Bogotá, Colombia.
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
                      Tienda especializada en la comercialización de bicicletas y repuestos en la ciudad de Bogotá, Colombia.
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
                      Tienda especializada en la comercialización de bicicletas y repuestos en la ciudad de Bogotá, Colombia.
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
                      Tienda especializada en la comercialización de bicicletas y repuestos en la ciudad de Bogotá, Colombia.
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
            >
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    San Francisco
                  </v-list-item-title>
                  <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-text>
                <v-row align="center">
                  <v-col
                    class="display-3"
                    cols="6"
                  >
                    23&deg;C
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                      alt="Sunny image"
                      width="92"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-send</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cloud-download</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>48%</v-list-item-subtitle>
              </v-list-item>

              <v-slider
                v-model="time"
                :max="6"
                :tick-labels="labels"
                class="mx-4"
                ticks
              ></v-slider>

              <v-list class="transparent">
                <v-list-item
                  v-for="item in forecast"
                  :key="item.day"
                >
                  <v-list-item-title>{{ item.day }}</v-list-item-title>

                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-subtitle class="text-right">
                    {{ item.temp }}
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn text>
                  Full Report
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-row>
      </v-container>
    </div>
    <div class="product-news">
      <v-container>
        <h1 class="text-center">Novedades</h1>
        <v-row>
          <v-col cols="4">
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
          </v-col>
          <v-col cols="4">
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
          </v-col>
          <v-col cols="4">
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
      }
    }
  }
  .product-news {
    h1 {
      color: #000000;
    }
  }
</style>
