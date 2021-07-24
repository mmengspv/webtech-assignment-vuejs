<template>
  <div>
    <h1 class="title">Ledger Account</h1>
    <ledger-form></ledger-form>
    <ledger-list></ledger-list>
  </div>
</template>

<script>
// @ is an alias to /src
import LedgerList from "../components/LedgerList.vue";
import LedgerForm from "../components/LedgerForm.vue";

export default {
  components: {
    LedgerForm,
    LedgerList,
  },
};
</script>

<style lang="scss">
.title {
  background-color: rgb(128, 30, 30);
  padding: 25px;
  width: 100%;
  color: white;
  justify-content: center;
}
</style>