<template>
  <div>
    <v-data-table :headers="headers" :items="moneyData" hide-default-footer>
      <template v-slot:[`item.type`]="{ item }">
        <v-chip :color="getColor(item.type)" dark>
          {{ item.type }}
        </v-chip>
      </template>
    </v-data-table>
    <div>
      <label>Balance: {{ balance }}</label>
    </div>
    <chart :income="totalIncome" :expense="totalExpense"></chart>
  </div>
</template>

<script>
import LedgerStore from "../store/LedgerStore";
import Chart from "./Chart.vue";

export default {
  components: { Chart },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Amount", value: "amount" },
        { text: "Type", value: "type" },
        { text: "Description", value: "description" },
        { text: "Date", value: "date" },
      ],
      moneyData: [],
      balance: 0,
      totalIncome: 0,
      totalExpense: 0,
    };
  },
  created() {
    this.fetchData();
    this.calMoney();
  },
  methods: {
    fetchData() {
      LedgerStore.dispatch("fetchMoneyData");
      this.moneyData = LedgerStore.getters.moneyData;
    },
    calMoney() {
      const total = this.moneyData.reduce((sum, money) => {
        if (money.type === "Income") {
          this.totalIncome += money.amount;
          return sum + money.amount;
        }
        this.totalExpense += money.amount;
        return sum - money.amount;
      }, 0);
      this.balance = total;
    },
    getColor(type) {
      if (type === "Expense") return "red";
      return "green";
    },
  },
};
</script>

<style>
</style>