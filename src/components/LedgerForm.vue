<template>
  <div>
    <form>
      <div>
        <span class="padding">
          <label>ชื่อการออม-ใช้จ่าย: </label>
          <input type="text" class="input-style" v-model="form.name" />
        </span>
        <span class="padding">
          <label>จำนวนเงิน: </label>
          <input type="number" class="input-style" v-model="form.amount" />
        </span>
        <span>
          <select class="input-style" v-model="form.type" id="type" required>
            <option value="" disabled>Please select Income or Expense</option>
            <option>Income</option>
            <option>Expense</option>
          </select>
        </span>
      </div>
      <div>
        <span class="padding">
          <label>Description: </label>
          <input type="text" class="input-style" v-model="form.description" />
        </span>
        <span>
          <label>Date: </label>
          <input type="date" class="input-style" v-model="form.date" />
        </span>
      </div>
    </form>
    <v-btn color="brown white--text" @click="addDataForm">Add data</v-btn>
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
      checkEmpty: "",
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
      if (
        this.form.type === "" ||
        this.form.date === "" ||
        this.form.name === ""
      ) {
        return alert("Please complete the information.");
      }
      LedgerStore.dispatch("addMoneyData", newData);
      this.clearForm();
    },
    clearForm() {
      this.form = {
        name: "",
        amount: 0,
        type: "",
        description: "",
        date: "",
      };
    },
  },
};
</script>

<style lang="scss">
div {
  margin: 20px;
}
.padding {
  padding: 10px;
}
.input-style {
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
}

label {
  font-size: 1.15em;
}
p.test {
  font-weight: bold;
}
.v-text-field {
  width: 250px;
}
</style>