<template>
  <v-card>
    <v-toolbar id="toolbar" height="auto" light flat>

      <v-toolbar-title class="d-flex align-center">
        <v-chip class="mr-5" color="primary" dark>{{ $route.params.code }} </v-chip>
        <h3 v-if="$route.params.objet">{{ $route.params.objet }} - {{ $route.params.lieu }}</h3>
        <h3 v-else>SCHROEDER 2020 - LUXITE</h3>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu bottom left offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn light icon v-bind="attrs" v-on="on">
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

          <v-tab v-for="item in items" :key="item.title">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab" grow>
      <v-tab-item v-for="item in items" :key="item.title">
        <v-card flat>
          <v-img v-if="item.content" class="ma-10" :src="require(`@/assets/${item.content}`)"></v-img>
          <component :is="item.component"></component>
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
import ProcessusNavComponent from '@/components/ProcessusNavComponent'
export default {
  name: 'ProjetView',

  components: {
    ProcessusNavComponent
  },

  data: () => ({
    menu: [
      { title: 'Reporting' },
      { title: 'Historique' }
    ],
    tab: null,
    items: [
      {
        title: 'Processus',
        component: 'ProcessusNavComponent',
        content: ''
      },
      {
        title: 'Calendrier',
        content: 'screenshots/calendrier.png'
      },
      {
        title: 'Données d\'entrées',
        content: 'screenshots/donnees.png'
      },
      {
        title: 'Journal',
        content: 'screenshots/journal.png'
      },
    ],
  })
}
</script>
