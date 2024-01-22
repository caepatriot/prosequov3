<template>
    <div class="processus-container text-uppercase text-center mt-10">
      <div class="chart">
        <div class="chart-row chart-period">
          <span class="">Offre</span>
          <span class="">Etudes preliminaires</span>
          <span class="two-col">Conception du projet</span>
          <span class="">Developpement</span>
          <span class="">Realisation</span>
          <span class="">Cloture</span>
        </div>
        <div class="chart-row chart-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="chart-row row-one">
          <!-- <div class="chart-row-item"></div> -->
          <ul class="chart-row-bars">
            <li class="chart-li">Offre</li>
            <li class="chart-li">Edf</li>
            <li class="chart-li">Aps</li>
            <li class="chart-li">Apd</li>
            <li class="chart-li">Projet d'execution</li>
            <li class="chart-li">Fin projet</li>
          </ul>
        </div>
        <div class="chart-row row-two">
          <ul class="chart-row-bars">
            <li class="chart-li">Autorisations</li>
          </ul>
        </div>
        <div class="chart-row row-three">
          <ul class="chart-row-bars">
            <li class="chart-li">Reseaux</li>
          </ul>
        </div>
        <div class="chart-row row-four">
          <ul class="chart-row-bars">
            <li class="chart-li">Estimation des couts</li>
            <li class="chart-li">Soumission</li>
          </ul>
        </div>
        <div class="chart-row row-five">
          <ul class="chart-row-bars">
            <li class="chart-li">Subsides AGE</li>
          </ul>
        </div>
        <div class="chart-row row-six">
          <ul class="chart-row-bars">
            <li class="chart-li">Coordination SST</li>
          </ul>
        </div>
        <div class="chart-row row-seven">
          <ul class="chart-row-bars">
            <li class="chart-li">Controle travaux</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.processus-container {
  width: 100%;
}

.chart {
  display: grid;
  position: relative;
  overflow: hidden;
}

.chart-row {
  display: grid;
  grid-template-columns: 1fr;
  background-color: #f9f9f9;
}

.chart-row:nth-child(odd) {
  background-color: #eeeeee;
}

.chart-period {
  color: rgb(66, 66, 66);
  border-bottom: 2px solid #000;
  grid-template-columns: repeat(7, 1fr);
}

.chart-lines {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: transparent;
  grid-template-columns: repeat(7, 1fr);
}

.chart-period>span {
  text-align: center;
  font-size: 13px;
  align-self: center;
  font-weight: bold;
  padding: 15px 0;
}

.chart-lines>span {
  display: block;
  /* border-right: 1px solid rgba(0, 0, 0, 0.3); */
}

.chart-row-item {
  border-top: 0;
  border-left: 0;
  padding: 20px 0;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}

.chart-row-bars {
  height: 70px;
  list-style: none;
  display: grid;
  padding: 10px 0;
  margin: 0;
  grid-template-columns: repeat(7, 1fr);
  /* grid-gap: 10px 0; */
}

.chart-row-bars li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 450;
  font-size: 15px;
  min-height: 15px;
  background-color: #000f9f;
  padding: 5px 15px;
  color: #fff;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin: 0 5px 0 5px;
}

.two-col {
  grid-column: 2 span;
}

/* ROW ONE LI */
.row-one .chart-li:nth-child(1) {
  grid-column: 1/2;
}

.row-one .chart-li:nth-child(2) {
  grid-column: 2/3;
}

.row-one .chart-li:nth-child(3) {
  grid-column: 3/4;
}

.row-one .chart-li:nth-child(4) {
  grid-column: 4/5;
}

.row-one .chart-li:nth-child(5) {
  grid-column: 2 span;
}

.row-one .chart-li:nth-child(6) {
  grid-column: 1 span;
}

/* ROW TWO LI */
.row-two .chart-li:nth-child(1) {
  grid-column: 2 / 6;
}

/* ROW THREE LI */
.row-three .chart-li:nth-child(1) {
  grid-column: 2 / 6;
}

/* ROW FOUR LI */
.row-four .chart-li:nth-child(1) {
  grid-column: 2 / 5;
}

.row-four .chart-li:nth-child(2) {
  grid-column: 5 / 7;
}

/* ROW FIVE LI */
.row-five .chart-li:nth-child(1) {
  grid-column: 4 / 8;
}

/* ROW SIX LI */
.row-six .chart-li:nth-child(1) {
  grid-column: 4 / 8;
}

/* ROW SEVEN LI */
.row-seven .chart-li:nth-child(1) {
  grid-column: 6 / 7;
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
    getProcessus: function (phase, activity) {
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
