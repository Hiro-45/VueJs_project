<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" lg="6" offset-sm="3" offset-lg="3">
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card class="elevation-10 mb-8" v-for="ad in ads" :key="ad.id">
          <v-row>
            <v-col class="py-0" xs="6" sm="4" lg="4">
              <v-img :src="ad.image" height="175px"></v-img>
            </v-col>
            <v-col xs="6" sm="8" lg="8">
              <v-card-text>
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions class="pb-0 pr-3 pt-5">
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
          title: 'Sixth Ad',
          description: 'Hello i am description',
          address: '№2',
          promo: true,
          image: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '2'
        }
      ]
    }
  }
}
</script>
