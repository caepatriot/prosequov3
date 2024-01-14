<template>
  <table border="1">
    <thead>
      <tr>
        <th>

        </th>
        <th v-for="phase in phases" :key="phase.title">
          {{ phase.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="activity in activities" :key="activity.title">
        <th>{{ activity.title }}</th>
        <td v-for="phase in phases" :key="phase.title">
          <span>{{ getProcessus(phase.id, activity.id) }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
}
</style>

<script>
export default {
  name: "ProcessusNavComponent",

  data: () => ({

    phases: [
      {
        id: 1,
        title: "Contractualisation",
        order: 1
      },
      {
        id: 2,
        title: "Etudes préliminaires",
        order: 2
      },
      {
        id: 3,
        title: "Conception",
        order: 3
      },
      {
        id: 4,
        title: "Développement",
        order: 4
      },
      {
        id: 5,
        title: "Réalisation",
        order: 5
      },
      {
        id: 6,
        title: "Clôture",
        order: 6
      },
      {
        id: 7,
        title: "Exploitation",
        order: 7
      },
    ],

    activities: [
      {
        id: 1,
        title: "Pilotage",
        order: 1
      },
      {
        id: 2,
        title: "Etudes spécifiques",
        order: 2
      },
      {
        id: 3,
        title: "Etudes projet",
        order: 3
      },
      {
        id: 4,
        title: "Autorisations",
        order: 4
      },
      {
        id: 5,
        title: "Devis - Soumission",
        order: 5
      },
      {
        id: 6,
        title: "Prestations particulières",
        order: 6
      },
      {
        id: 7,
        title: "Contrôle des travaux",
        order: 7
      },
      {
        id: 8,
        title: "Administration du projet",
        order: 8
      },
    ],

    processus: [
      {
        id: 1,
        title: "Programmation",
        phase: 2,
        activity: 1,
        order: 1
      },
    ]

  }),

  watch: {

  },

  mounted() {
  },

  created() {

  },

  computed: {
    getProcessus: function(phase, activity) {
      return this.processus.filter(obj => {
        if (obj.phase == phase.id && obj.activity == activity.id) {
          return obj;
        }
      })
    },
  },

  methods: {
  },
};
</script>
