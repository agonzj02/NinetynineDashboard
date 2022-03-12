<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          Top 10 cryptos by market cap
        </h1>
      </v-col>

      <v-col class="mb-4">
        <v-data-table :headers="headers" :items="cryptos"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    headers: [
      { text: "Rank", value: "rank" },
      { text: "Name", value: "name" },
      { text: "Market cap ($)", value: "marketCap" },
      { text: "Last price ($)", value: "lastUSD" },
      { text: "Last price (€)", value: "lastEUR" },
    ],
    cryptos: [],
  }),
  mounted() {
    this.getTopCryptos();
  },
  methods: {
    getTopCryptos() {
      let self = this;
      axios
        .get("http://localhost:3000/cryptos/top10")
        .then(function (response) {
          self.cryptos = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
