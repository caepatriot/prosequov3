<template>
  <v-container fluid class="fill-height">
    <v-row class="fill-height">
      <v-col>
        <v-row>
          <v-col cols="3">
            <ProjetsInfoWidget title="Test" />
          </v-col>
          <v-col cols="3">
            <ProjetsInfoWidget title="Test 2"/>
          </v-col>
          <v-col cols="3">
            <ProjetsInfoWidget title="Test 3"/>
          </v-col>
          <v-col cols="3">
            <ProjetsInfoWidget title="Test 4"/>
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
                  <!-- <v-list-item-icon>
                <v-icon v-if="item.icon" color="pink">
                  mdi-star
                </v-icon>
              </v-list-item-icon> -->

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
        { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
    };
  },

  mounted() {
  },

  methods: {
  },
};
</script>
