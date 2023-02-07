<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" lg="6" offset-sm="3">
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
            v-model="title"
            name="title"
            label="Ad title"
            type="text"
            :rules="[v => !!v || 'Title is required']"
            required>
          </v-text-field>
          <v-textarea
            class="mb-2"
            v-model="description"
            name="descriprion"
            label="Ad description"
            type="text"
            :rules="[v => !!v || 'Title is required']">
          </v-textarea>
        </v-form>
        <v-row>
          <v-col xs="12">
            <v-btn  class="warning elevation-8" right>
              Upload
              <v-icon right dark>
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="text-xs-center image_box">
            <img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="Image load...">
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="text-xs-center image_box">
            <v-switch
              color="indigo"
              v-model="promo"
              label="Add to promo?"
            ></v-switch>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="text-xs-center image_box">
           <v-spacer></v-spacer>
            <v-btn class="warning" :disabled="!valid" @click="createAd">Create ad</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      promo: false,
      title: '',
      description: '',
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }
        console.log(ad)
      }
    }
  }
}
</script>
<style scoped>
.image_box {
  width: 100%;
}
.image_box img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
</style>
