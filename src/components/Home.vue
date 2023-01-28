<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.image"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <h1>Home</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        {
          title: 'First Ad',
          description: 'Hello i am description',
          promo: false,
          image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '1'
        },
        {
          title: 'First Ad',
          description: 'Hello i am description',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '2'
        },
        {
          title: 'First Ad',
          description: 'Hello i am description',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '3'
        },
        {
          title: 'First Ad',
          description: 'Hello i am description',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '4'
        }
      ]
    }
  }
}
</script>
