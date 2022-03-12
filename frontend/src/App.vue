<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <HeaderBar />
      </div>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
    <FooterBar />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";

export default {
  name: "App",

  components: {
    HelloWorld,
    HeaderBar,
    FooterBar,
  },

  data: () => ({
    //
  }),
};
</script>
