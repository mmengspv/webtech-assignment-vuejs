<template>
  <div>
    <form>
      <div>
        <span>
          <label>ชื่อการออม-ใช้จ่าย: </label>
          <input type="text" class="border" v-model="form.name" />
        </span>
        <span>
          <label>จำนวนเงิน: </label>
          <input type="number" class="border" v-model="form.amount" />
        </span>
      </div>
      <div>
        <span>
          <label>Description: </label>
          <input type="text" class="border" v-model="form.description" />
        </span>
        <span>
          <label>Date: </label>
          <input type="date" class="border" v-model="form.date" />
        </span>
      </div>
    </form>
    <button class="border" @click="addDataForm">Add data</button>
  </div>
</template>

<script>
import LedgerStore from "../store/LedgerStore";
export default {
  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      form: {
        name: "",
        amount: 0,
        type: "",
        description: "",
        date: "",
      },
    };
  },
  methods: {
    addDataForm() {
      const newData = {
        name: this.form.name,
        amount: this.form.amount,
        type: this.form.type,
        description: this.form.description,
        date: this.form.date,
      };

      LedgerStore.dispatch("addMoneyData", newData);
    },
  },
};
</script>

<style lang="scss">
div {
  margin: 20px;
}
span {
  padding: 10px;
}
.border {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
</style>