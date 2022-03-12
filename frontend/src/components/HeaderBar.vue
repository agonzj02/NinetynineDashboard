<template>
  <v-app-bar app color="secondary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('@/assets/logo.svg')"
        transition="scale-transition"
        width="200"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>
