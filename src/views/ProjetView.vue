<template>
  <v-card>
    <v-toolbar id="toolbar" height="auto" light flat>

      <v-toolbar-title class="d-flex align-center">
        <v-chip class="mr-5" color="primary" dark>{{ $route.params.code }} </v-chip>
        <h3 v-if="$route.params.objet">{{ $route.params.objet }} - {{ $route.params.lieu }}</h3>
        <h3 v-else>SCHROEDER 2020 - LUXITE</h3>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list nav dense>
          <v-list-item v-for="(item, i) in menu" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="#000F9F"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab" grow>
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <!-- <v-card-text v-text="text">
          </v-card-text> -->
          <v-img class="ma-10" lazy-src="https://picsum.photos/id/11/10/6" src="@/assets/calendrier.png"></v-img>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<style scoped>
h3 {
  display: inline;
}

#toolbar {
  /* border: 4px solid #00B6D4; */
}
</style>

<script>
export default {
  name: 'ProjetView',

  components: {

  },

  data: () => ({
    menu: [
      { title: 'Reporting' },
      { title: 'Historique' }
    ],
    tab: null,
    items: [
      'Processus', 'Calendrier', 'Données d\'entrées', 'Journal',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  })
}
</script>
