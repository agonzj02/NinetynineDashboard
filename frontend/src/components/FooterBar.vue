<template>
  <v-footer color="secondary" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" text rounded class="my-2">
        {{ link }}
      </v-btn>
      <v-col class="secondary py-4 text-center" cols="12">
        2022 — <strong>Álvaro González Jiménez</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterBar",
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>
