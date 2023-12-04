<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card width="100%" height="100%">
          <v-toolbar flat color="primary" dark>
            <v-toolbar-title>Projet XX/XXXX</v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab class="justify-start">
              <v-icon left> mdi-chart-gantt </v-icon>
              Processus
            </v-tab>
            <v-tab class="justify-start">
              <v-icon left> mdi-calendar-clock </v-icon>
              Calendrier
            </v-tab>
            <v-tab class="justify-start">
              <v-icon left> mdi-database-arrow-left-outline </v-icon>
              Données d'entrées
            </v-tab>
            <v-tab class="justify-start">
              <v-icon left> mdi-notebook-outline </v-icon>
              Journal
            </v-tab>
            <v-tab class="justify-start">
              <v-icon left> mdi-file-chart-outline </v-icon>
              Reporting
            </v-tab>
            <v-tab class="justify-start">
              <v-icon left> mdi-history </v-icon>
              Historique
            </v-tab>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <img src="@/assets/processus.png">
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <img src="@/assets/calendrier.png">
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <img src="@/assets/donnees.png">
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <img src="@/assets/journal.png">
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <img src="@/assets/reporting.png">
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <img src="@/assets/historique.png">
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProjetCardComponent",

  data: () => ({}),
};
</script>
