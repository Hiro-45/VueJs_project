<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="12" lg="12" offset="sm3">
        <v-card>
          <v-img height="300px" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"></v-img>
          <v-card-text>
            <h1 class="text--primary">Lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, placeat?</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning" text>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
