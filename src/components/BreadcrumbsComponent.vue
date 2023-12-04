<template>
  <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
</template>

<script>
export default {
  name: "BreadcrumbsComponent",

  data: () => ({
    breadcrumbs: [],
  }),

  watch: {
    $route(to) {
      this.updateBreadcrumbs(to);
    },
  },

  created() {
    console.log(this.$route)
    this.updateBreadcrumbs(this.$route);
  },

  methods: {
    updateBreadcrumbs(route) {
      const breadcrumbs = [];
      route.matched.forEach((match) => {
        if (match.meta && match.meta.breadcrumb) {
          breadcrumbs.push({
            text: this.getBreadcrumbText(match, route.params),
            disabled: false,
            href: this.getBreadcrumbText(match, route.params),
          });
        }
      });
      this.breadcrumbs = breadcrumbs;
    },
    getBreadcrumbText(match, params) {
      let text = match.meta.breadcrumb;
      if (params) {
        Object.keys(params).forEach((param) => {
          text = text.replace(`:${param}`, params[param]);
        });
      }
      return text;
    },
  },
};
</script>
