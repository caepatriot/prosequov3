<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list dense nav>
        <v-list-item v-for="item in navItems" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left flat color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>ProSequo</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-avatar size="36px">
        <img alt="Avatar" src="http://info-sa/sa-personnel/photos/cdrr.jpg">
      </v-avatar>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <span>Footer</span>
    </v-footer>
  </v-app>
</template>

<style scoped>
.nav-opener-container {
  position: relative;
}

.nav-opener {
  position: absolute;
  top: 0;
  right: 0;
  background-color: grey;
  height: 15px;
  width: 5px;
}
</style>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    navItems: [
      { title: "Dashboard", icon: "mdi-view-dashboard", link:"/dashboard" },
      { title: "Photos", icon: "mdi-image", link:"" },
      { title: "About", icon: "mdi-help-box", link:"" },
    ],
  }),
};
</script>
