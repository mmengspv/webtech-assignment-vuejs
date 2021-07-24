<template>
  <div>
    <span>
      <h1 class="title">Ledger Account</h1>
    </span>
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

<style scoped lang="scss">
.title {
  background-color: rgb(128, 30, 30);
  padding: 25px;
  width: 100%;
  color: white;
  text-align: center;
}
</style>