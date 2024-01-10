<template>
  <v-card>
    <v-toolbar color="#00B6D4" dark flat>

      <v-toolbar-title>
        <v-chip color="white" light>{{ $route.params.code }} </v-chip>
        {{ $route.params.objet }} {{ $route.params.lieu }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="white"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
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

<script>
export default {
  name: 'ProjetView',

  components: {

  },

  data: () => ({
    tab: null,
    items: [
      'Processus', 'Calendrier', 'Données d\'entrées', 'Journal', 'Reporting', 'Historique',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  })
}
</script>
