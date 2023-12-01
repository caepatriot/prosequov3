<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list dense nav>
        <v-list-item v-for="item in navItems" :key="item.title" link>
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

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

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
      <span>lol</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: true,
    navItems: [
      { title: "Tableau de bord", icon: "mdi-view-dashboard" },
      { title: "Liste des projets", icon: "mdi-format-list-bulleted-type" },
      { title: "Mes collection", icon: "mdi-bookmark-multiple-outline" },
      { title: "Paramètres", icon: "mdi-cog" },
      { title: "Editeur Check-listes", icon: "mdi-order-bool-ascending-variant" },
    ],
  }),
};
</script>
