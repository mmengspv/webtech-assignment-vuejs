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
      <label>Balance: {{ this.balance }}</label>
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
        { text: "Date", value: "date" },
        { text: "Type", value: "type" },
        { text: "Amount", value: "amount" },
        { text: "Description", value: "description" },
      ],
      moneyData: [],
      balance: 0,
      totalIncome: 0,
      totalExpense: 0,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      LedgerStore.dispatch("fetchMoneyData");
      this.moneyData = LedgerStore.getters.moneyData;
      console.log(this.moneyData);
      this.calMoney();
    },
    calMoney() {
      this.balance = 0;
      this.totalIncome = 0;
      this.totalExpense = 0;
      console.log(this.balance);
      this.moneyData.forEach((money) => {
        if (money.type === "Income") {
          this.totalIncome += Number(money.amount);
        } else {
          this.totalExpense += Number(money.amount);
        }
      });
      console.log("do calculate");
      this.balance = this.totalIncome - this.totalExpense;
      console.log(this.balance);
      console.log(this.totalIncome);
      console.log(this.totalExpense);
    },
    getColor(type) {
      if (type === "Expense") return "red";
      return "green";
    },
  },
  beforeUpdate() {
    this.calMoney();
  },
};
</script>

<style>
</style>