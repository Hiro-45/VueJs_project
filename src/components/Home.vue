<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col xs="12">
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.image">
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col
          v-for="ad of ads"
          :key="ad.id"
          xs="12" sm="6" md="6" lg="4">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="ad.image">
              <v-card-title primary-title>{{ ad.address }}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ ad.title }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{ ad.description }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
          address: '№1',
          promo: false,
          image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '1'
        },
        {
          title: 'Second Ad',
          description: 'Hello i am description',
          address: '№2',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '2'
        },
        {
          title: 'Third Ad',
          description: 'Hello i am description',
          address: '№3',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '3'
        },
        {
          title: 'Fourth Ad',
          description: 'Hello i am description',
          address: '№4',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '4'
        },
        {
          title: 'Fifth Ad',
          description: 'Hello i am description',
          address: '№5',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '5'
        },
        {
          title: 'Sixth Ad',
          description: 'Hello i am description',
          address: '№6',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '6'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0,0,0, .3);
    transform: translate(-50%, 0);
    padding:5px 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>
