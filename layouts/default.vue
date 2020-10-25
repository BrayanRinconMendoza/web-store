<template>
  <v-app>
    <v-app-bar
      fixed
      app
      light
      prominent
    >
      <v-toolbar-title class="icon-and-title">
        <a href="/"> 
          <v-img src="/color-white.png" width="90" height="90" class="logo"></v-img>    
        </a> 
      </v-toolbar-title>
      <v-spacer />
      <div class="buttons-container">
        <v-btn outlined color="indigo" href="/"><v-icon>mdi-home</v-icon>Home</v-btn>
        <v-btn outlined color="indigo" href="/faq">FAQ</v-btn>
        <v-btn outlined color="indigo">Products</v-btn> 
        <v-btn outlined color="indigo"><v-icon>mdi-account-circle</v-icon>Login</v-btn> 
      </div>
    </v-app-bar> 
    <v-main>
      <nuxt />
    </v-main>
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <div class="buttons-container">
          <v-btn outlined color="white">Contact Us</v-btn> 
        </div>
        <v-divider></v-divider> 
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    })
  }
</script>

<style lang="scss">
  .icon-and-title {
    display: block;
    margin: auto;
    .logo {
      margin-left: 20px; 
    }
  }
  .buttons-container {
    display: block;
    bottom: 0;
    margin: auto;
  }
</style>


