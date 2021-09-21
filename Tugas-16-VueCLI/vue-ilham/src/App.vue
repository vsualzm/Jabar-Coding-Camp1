<template>
<!-- App.vue -->
<v-app>
  <v-navigation-drawer app v-model="drawer">
    <v-list>
      <v-list-item v-if="!guest">
        <v-list-item-avatar>
          <v-img src="https://ibb.co/j5PCTcB"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Ilham maulana</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <div class="pa-2" v-if="guest">
        <v-btn block color="primary" class="mb-1">
          <v-icon left>mdi-lock</v-icon>
          Login
        </v-btn> 
        <v-btn block color="succes">
          <v-icon left>mdi-account</v-icon>
          Register
        </v-btn> 
      </div>

      <v-divider></v-divider>
      
      <v-list-item 
        v-for="(item,index) in menus"
        :key="`menu-${index}`"
        :to="item.route"
      >

      <v-list-item-icon>
        <v-icon left>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append v-if="!guest">
      <div class="pa-2">
        <v-btn block color="red" dark>
          <v-icon left>mdi-lock</v-icon>
          Logout
        </v-btn>
      </div>
    </template>

  </v-navigation-drawer>

  <v-app-bar app color="succes" dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>VsualzmAppilham</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <v-slide-y-transition>
        <router-view></router-view>
      </v-slide-y-transition>
    </v-container>
  </v-main>

  <v-footer app>
    @vsualzm | VueJsIlham
  </v-footer>
</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer : true,
    menus : [
      {title : 'Home', icon : 'mdi-home', route : '/' },
      {title : 'Blogs', icon : 'mdi-note', route : '/blogs' },
    ],
    guest : true
  }),
};
</script>
