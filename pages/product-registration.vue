<template>
    <section class="product-registration-content">
        <v-container>
            <v-row>
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                    <h4>Registrar Producto</h4>
                    <v-stepper
                        v-model="e6"
                        vertical
                        light
                    >
                        <v-stepper-step
                            :complete="e6 > 1"
                            step="1"
                        >
                            Nombre, descripción y detalle
                            <small>En esta sección se agrega el nombre, descripción y detalle del producto</small> 
                        </v-stepper-step>

                        <v-stepper-content step="1">
                        <v-card
                            light
                            class="mb-12"
                            height="auto"
                        >
                            <v-form>
                                <v-container>
                                    <v-text-field
                                        :counter="15"
                                        label="Nombre"
                                        required
                                        outlined
                                        color="#3f51b5"
                                    ></v-text-field>
                                    <v-text-field
                                        :counter="50"
                                        label="Descripción"
                                        required
                                        outlined
                                        color="#3f51b5"
                                    ></v-text-field>
                                    <v-text-field
                                        :counter="50"
                                        label="Detalle"
                                        required
                                        outlined
                                        color="#3f51b5"
                                    ></v-text-field>
                                </v-container>
                            </v-form>
                        </v-card>
                        <v-btn
                            color="primary"
                            @click="e6 = 2"
                        >
                            Continuar
                        </v-btn>
                        <v-btn 
                            color="red"
                            dark
                            @click="reset"
                        >
                            Cancelar
                        </v-btn>
                        </v-stepper-content>

                        <v-stepper-step
                            :complete="e6 > 2"
                            step="2"
                        >
                            Referencia, marca, categoría e imagen
                            <small>En esta sección se agrega la referencia, marca, categoría e imagen del producto</small>
                        </v-stepper-step>

                        <v-stepper-content step="2">
                            <v-card
                                light
                                class="mb-12"
                                height="auto"
                            >
                                <v-form>
                                    <v-container>
                                        <v-text-field
                                            :counter="15"
                                            label="Referencia"
                                            required
                                            outlined
                                            color="#3f51b5"
                                        ></v-text-field>
                                        <v-text-field
                                            :counter="20"
                                            label="Marca"
                                            required
                                            outlined
                                            color="#3f51b5"
                                        ></v-text-field>
                                        <v-text-field
                                            :counter="20"
                                            label="Categoría"
                                            required
                                            outlined
                                            color="#3f51b5"
                                        ></v-text-field>
                                         <v-file-input
                                            label="File input"
                                            outlined
                                            dense
                                            color="#3f51b5"
                                        ></v-file-input>
                                    </v-container>
                                </v-form>
                            </v-card>
                            <v-btn
                                color="primary" 
                                dark
                                @click="e6 = 3"
                            >
                                Continuar
                            </v-btn>
                            <v-btn 
                                color="red"
                                dark
                                @click="reset"
                            >
                                Limpiar Formulario
                            </v-btn>
                        </v-stepper-content>
                        <v-stepper-content step="3">
                            <v-card
                                light
                                class="mb-12"
                                height="auto"
                            >
                                <v-form>
                                    <v-container class="text-center">
                                        <v-btn
                                            color="green"
                                            dark
                                            @click="validate"
                                        >
                                            Guardar
                                        </v-btn>
                                    </v-container>
                                </v-form>
                            </v-card>
                        </v-stepper-content>
                    </v-stepper>
                </div>
                <div class="col-lg-3"></div>
            </v-row>
        </v-container>
    </section>
</template>

<script>
  export default {
    data () {
      return {
        e6: 1,
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      }
    },
  }
</script>

<style lang="scss">
    .product-registration-content {
        background-color: white; 
        h4 {
            color: #000000;
            font-size: 30px;
            margin-bottom: 15px;
        }
    }
</style>