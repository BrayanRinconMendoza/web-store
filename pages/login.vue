<template>
    <section class="login-section">
        <v-container>
            <v-row>
                <div class="col-lg-4"></div>
                <div class="col-lg-4">
                    <v-card color="indigo lighten-1 text-center">
                        <v-container>
                            <span class="login-tag">
                                <v-icon>mdi-account</v-icon>
                                Iniciar Sesión
                            </span>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                    outlined
                                    color="white"
                                ></v-text-field>
                                <v-text-field
                                    v-model="name"
                                    :counter="15"
                                    :rules="nameRules"
                                    label="Password"
                                    required
                                    outlined
                                    color="white"
                                ></v-text-field>
                                <div class="buttons-form">
                                    <v-btn
                                        :disabled="!valid"
                                        color="success"
                                        class="mr-4 button-validate"
                                        @click="validate"
                                    >Ingresar</v-btn>
                                    <v-btn
                                        color="error"
                                        class="mr-4 button-reset"
                                        @click="reset"
                                    >Limpiar Login</v-btn>
                                </div>
                            </v-form>
                        </v-container>
                    </v-card>
                </div>
                <div class="col-lg-4"></div>
            </v-row>
        </v-container>
    </section>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 15 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }),
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
    .login-section {
        background-color: white;
        .login-tag {
            font-size: 25px;
        }
        .buttons-form {
            text-align: center;
            .button-validate,
            .button-reset {
                margin-top: 15px;
                margin-left: 10px;
            }
        }
    }
</style>