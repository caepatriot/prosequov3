<template>
  <div>
    <breadcrumbs-component />
    <projet-card-component />
  </div>
</template>

<script>
import BreadcrumbsComponent from '../components/BreadcrumbsComponent.vue'
import ProjetCardComponent from '../components/ProjetCardComponent.vue'

export default {
  name: 'ProjetView',

  components: {
    BreadcrumbsComponent,
    ProjetCardComponent
  },
}
</script>
