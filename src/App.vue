<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item :to="link.url" v-for="link of links" :key="link.title">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad application</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn text v-for="link in links" :key="link.title" :to="link.url">
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      inWidth: 0,
      drawer: false,
      links: [
        {title: 'Login', icon: 'mdi-lock', url: '/login'},
        {title: 'Registration', icon: 'mdi-face-man', url: '/registration'},
        {title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
        {title: 'New ad', icon: 'mdi-note-plus-outline', url: '/new'},
        {title: 'My ads', icon: 'mdi-format-list-bulleted', url: '/list'}
      ]
    }
  },
  watch: {
    inWidth () {
      if (window.innerWidth >= 960) {
        this.drawer = false
      }
    }
  },
  methods: {
    updateWidth () {
      this.inWidth = window.innerWidth
    }
  },
  created () {
    window.addEventListener('resize', this.updateWidth)
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
