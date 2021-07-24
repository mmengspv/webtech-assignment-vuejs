<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,

  props: ["income", "expense"],
  computed: {
    chartData: function () {
      return [this.income, this.expense];
    },
  },
  mounted() {
    this.renderPieChart();
  },
  methods: {
    renderPieChart() {
      this.renderChart(
        {
          labels: ["Income", "Expense"],
          datasets: [
            {
              backgroundColor: ["#41B883", "#E46651"],
              data: this.chartData,
            },
          ],
        },
        { responsive: true, maintainAspectRatio: false }
      );
    },
  },
  watch: {
    chartData: function () {
      this.renderPieChart();
    },
  },
};
</script>

<style>
</style>



