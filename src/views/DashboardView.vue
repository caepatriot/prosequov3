<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height">
      <v-col>
        <v-row>
          <v-col cols="3">
            <ProjetsInfoWidget title="Test" />
          </v-col>
          <v-col cols="3">
            <ProjetsInfoWidget title="Test 2" />
          </v-col>
          <v-col cols="3">
            <ProjetsInfoWidget title="Test 3" />
          </v-col>
          <v-col cols="3">
            <ProjetsInfoWidget title="Test 4" />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="auto">
            <v-card class="mx-auto fill-height" width="100%">

              <v-list dense nav>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Mes projets</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-group v-for="item in lists" :key="item.title" v-model="item.active" :prepend-icon="item.action">
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item v-for="child in item.lists" :key="child.title">
                    <v-list-item-content>
                      <v-list-item-title v-text="child.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </v-list>
            </v-card>
          </v-col>
          <v-col>
            <ListeProjets />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListeProjets from '@/components/projet/ListeProjets'
import ProjetsInfoWidget from '@/components/widgets/ProjetsInfoWidget'

export default {
  name: "DashboardView",

  components: {
    ListeProjets,
    ProjetsInfoWidget
  },

  data() {
    return {
      lists: [
        {
          title: "Mes listes personnalisées",
          lists: [
            { title: 'Liste 1', avatar: 'http://info-sa/sa-personnel/photos/damfac.jpg' },
            { title: 'Liste 2022', avatar: 'http://info-sa/sa-personnel/photos/anma.jpg' },
            { title: 'Ma liste parfaite', avatar: 'http://info-sa/sa-personnel/photos/soqa.jpg' },
          ]
        },
        {
          title: "Mes Subordonnées",
          lists: [
            { title: 'Damien Fache', avatar: 'http://info-sa/sa-personnel/photos/damfac.jpg' },
            { title: 'Antonio Matias', avatar: 'http://info-sa/sa-personnel/photos/anma.jpg' },
            { title: 'Sofiane Qartit', avatar: 'http://info-sa/sa-personnel/photos/soqa.jpg' },
          ]
        },

      ],
    };
  },

  mounted() {
  },

  methods: {
  },
};
</script>
