import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);
function BarChart({ data, options }) {
  return (
    <Bar data={ data }
      options={ options } />
  );
}
export { BarChart };