<template>
  <div>
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
