<template>
  <v-carousel
    height="450"
    hide-delimiter-background
    show-arrows-on-hover
    cycle 
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/slider_1.jpg',
          },
          {
            src: '/slider_2.jpg',
          },
          {
            src: '/slider_3.jpg',
          },
          {
            src: '/slider_4.jpg',
          }
        ],
      }
    },
  }
</script> 