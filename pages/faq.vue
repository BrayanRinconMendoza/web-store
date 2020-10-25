<template>
  <section class="main-section">
    <div>
      <h1>Frequently Asked Questions</h1>
    </div>
    <div class="panels-container">
      <v-container>
        <v-row>
          <div class="col-lg-2"></div>
          <div class="col-lg-8">
            <div class="panels-content">
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
                    <span>Valores corporativos</span>
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
            </div>
          </div>
          <div class="col-lg-2"></div>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
  
</script>

<style lang="scss">
  .main-section {
    background-color: white; 
    div {
      h1 {
        color: #000000;
        font-size: 45px;
        font-weight: 500;
        text-align: center;
      }
    }
    .panels-container {
      .panels-content {
        span {
          color: #3f51b5;
        }
      }
    }
  }
</style>

