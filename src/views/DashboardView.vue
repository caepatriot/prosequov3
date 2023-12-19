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
            <v-card class="mx-auto fill-height">
              <!-- <v-card-title> Mes </v-card-title> -->

              <!-- <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle> -->

              <v-list subheader>
                <v-subheader>Mes subordonnés</v-subheader>
                <v-list-item v-for="item in items" :key="item.title">

                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>

                </v-list-item>
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
      items: [
        { icon: true, title: 'Claude Ribeiro', avatar: 'http://info-sa/sa-personnel/photos/cdrr.jpg' },
        { title: 'Damien Fache', avatar: 'http://info-sa/sa-personnel/photos/damfac.jpg' },
        { title: 'Antonio Matias', avatar: 'http://info-sa/sa-personnel/photos/anma.jpg' },
        { title: 'Sofiane Qartit', avatar: 'http://info-sa/sa-personnel/photos/soqa.jpg' },
      ],
    };
  },

  mounted() {
  },

  methods: {
  },
};
</script>
