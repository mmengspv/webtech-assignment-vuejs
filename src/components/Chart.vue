<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: ["income", "expense"],
  mounted() {
    this.renderChart(
      {
        labels: ["Income", "Expense"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651"],
            data: [this.income, this.expense],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>

<style>
</style>


