<template>
  <v-card class="mx-auto">
    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle> Test </v-card-subtitle>

    <v-expand-transition>
    </v-expand-transition>
  </v-card>
</template>

<style scoped></style>

<script>
export default {
  name: "ProjetsInfoWidget",

  data: () => ({
  }),

  props: ['inputUser', 'title', 'subtitle'],

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
