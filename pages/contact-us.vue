<template>
    <section class="contact-us-content">
        <v-container>
            <v-row>
                <div class="col-lg-3"></div>
                <div class="col-lg-6">
                    <v-card color="indigo darken-1 text-center">
                        <v-container>
                            <span class="contact-us-tag">
                                ¡Contáctanos!
                            </span>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-text-field
                                    v-model="name"
                                    :counter="20"
                                    :rules="nameRules"
                                    label="Nombre"
                                    required
                                    outlined
                                    color="white"
                                ></v-text-field>
                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="Email"
                                    type="email"
                                    required
                                    outlined
                                    color="white"
                                ></v-text-field>
                                <v-textarea
                                    v-model="textarea"
                                    :rules="textareaRules"
                                    label="Mensaje"
                                    auto-grow
                                    outlined
                                    rows="3"
                                    row-height="25"
                                    color="white"
                                ></v-textarea>
                                <div class="buttons-form">
                                    <v-btn
                                        :disabled="!valid"
                                        color="green"
                                        class="mr-4"
                                        @click="validate"
                                    >Enviar</v-btn>
                                </div>
                            </v-form>
                        </v-container>
                    </v-card>
                </div>
                <div class="col-lg-3"></div>
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
                v => !!v || 'Nombre es necesario',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail es necesario',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            textarea: '',
            textareaRules: [
                v => !!v || 'Nombre es necesario',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
        }),
        methods: {
            validate () {
                this.$refs.form.validate()
            },
        }
    }
</script>

<style lang="scss">
    .contact-us-content {
        background-image: url("/fondo_2.jpeg");
        background-size: cover;
        height: auto;
        background-color: white;
        .contact-us-tag {
            font-size: 25px;
        }
    }
</style>