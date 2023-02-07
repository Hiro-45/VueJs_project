<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="6" lg="6" offset-sm="3">
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-divider></v-divider>
        <v-list subheader two-line flat>
          <v-list-item avatar v-for="order in orders" :key="order.id">
            <v-list-item-action>
              <v-checkbox :input-value="order.done" @change="markDone(order)" color="success"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      orders: [
        {
          id: '1',
          name: 'Hideo',
          phone: '8-951-951-95-95',
          adId: '2',
          done: false
        }
      ]
    }
  },
  methods: {
    markDone (order) {
      order.done = true
    }
  }
}
</script>
