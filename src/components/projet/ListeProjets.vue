<template>
  <v-card>
    <v-card-title>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Recherche" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table height="100%" :headers="headers" :items="projets" :sort-by="['tri']" :sort-desc="[true]"
      :search="search" @click:row="goToProjet"></v-data-table>
  </v-card>
</template>

<style scoped></style>

<script>
import axios from "axios";


export default {
  name: "ListeProjets",

  data: () => ({
    projets: [],
    search: '',
    headers: [
      {
        text: 'Code',
        align: 'start',
        filterable: true,
        value: 'code',
      },
      { text: 'Objet', value: 'objet' },
      { text: 'Lieu', value: 'lieu' },
      { text: 'Tri', value: 'tri' },
    ],
  }),

  watch: {

  },

  mounted() {
    axios
      .get("http://localhost:8085/api/projets")
      .then((response) => (this.projets = response.data))
      .catch((error) => {
        this.projets.push({
          code: '20020',
          objet: 'SCHROEDER 2020',
          lieu: 'LUXITE',
          tri: 1
        })
        console.log(error.code);
      });
  },

  created() {

  },

  methods: {
    goToProjet(row) {
      this.$router.push({
        name: "Projet", params: {
          code: row.code,
          objet: row.objet,
          lieu: row.lieu,
          tri: row.tri
        }
      });
    },
  },
};
</script>
