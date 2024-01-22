<template>
  <div>
    <v-card-title>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Recherche" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="etapes" :search="search">

      <template v-slot:[`item.phase`]="{ item }">
      <v-chip
        :color="red"
        dark
      >
        {{ item.calories }}
      </v-chip>
    </template>
    </v-data-table>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "CalendarComponent",

  data: () => ({
    search: '',
    headers: [
      {
        text: 'Etape',
        align: 'center',
        filterable: false,
        value: 'etape',
      },
      { text: 'Date estimée', value: 'date_est' },
      { text: 'Durée (jours)', value: 'duree' },
      { text: 'Date réalisée', value: 'date_rea' },
      { text: 'Phase / Processus', value: 'phase' },
      { text: 'Commentaire', value: 'comm' }
    ],
    etapes: [
      {
        etape: 'Offre',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Contractualisation',
        comm: '',
      },
      {
        etape: 'Commande',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Contractualisation',
        comm: '',
      },
      {
        etape: 'Début EDF',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Conception / EDF',
        comm: '',
      },
      {
        etape: 'Remise EDF',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Conception / EDF',
        comm: '',
      },
      {
        etape: 'Approbation EDF / Début APS',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Conception / APS',
        comm: '',
      },
      {
        etape: 'Remise APS',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Conseption / APS',
        comm: '',
      },
      {
        etape: 'Approbation APS / Début APD',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Conception / APD',
        comm: '',
      },
      {
        etape: 'Remise APD',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Conception / APD',
        comm: '',
      },
      {
        etape: 'Approbation APD / Début EXE',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Développement / EXE',
        comm: '',
      },
      {
        etape: 'Début des travaux',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Réalisation / PIT',
        comm: '',
      },
      {
        etape: 'Réception des travaux',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Clôture',
        comm: '',
      },
      {
        etape: 'Clôture code',
        date_est: null,
        duree: 0,
        date_rea: null,
        phase: 'Clôture',
        comm: '',
      },
    ],
  }),

  watch: {

  },

  mounted() {
  },

  created() {

  },

  methods: {
  },
};
</script>
