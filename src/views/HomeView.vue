<template>
  <div>
    <breadcrumbs-component />
    <hello-world />
  </div>
</template>

<script>
import BreadcrumbsComponent from '../components/BreadcrumbsComponent.vue'
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'HomeView',

  components: {
    BreadcrumbsComponent,
    HelloWorld
  },
}
</script>
