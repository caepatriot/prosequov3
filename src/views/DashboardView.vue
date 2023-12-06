<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="3">
        <v-card class="mx-auto">
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-expand-transition>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto">
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-expand-transition>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card class="mx-auto">
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-expand-transition>
          </v-expand-transition>
        </v-card></v-col
      >
      <v-col cols="3">
        <v-card class="mx-auto">
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-expand-transition>
          </v-expand-transition>
        </v-card></v-col
      >
    </v-row>
    <v-row dense>
      <v-col> </v-col>
    </v-row>

    <v-card class="mx-auto">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Code</th>
              <th>Projet</th>
              <th>Indicateurs</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="projet in projets"
              :key="projet.code"
              @click="goToProjet(projet.code)"
            >
              <td>{{ projet.code }}</td>
              <td>{{ projet.mission }}</td>
              <td>{{ projet.place }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardView",

  components: {},

  data() {
    return {
      projets: null,
    };
  },

  mounted() {
    axios
      .get("http://localhost:8081/api/projects")
      .then((response) => (this.projets = response.data))
      .catch((error) => {
        console.log(error.code);
      });
  },

  methods: {
    goToProjet(code) {
      this.$router.push({ name: "Projet", params: { code: code } });
    },
  },
};
</script>
