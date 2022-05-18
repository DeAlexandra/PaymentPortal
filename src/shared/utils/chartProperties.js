import { t } from "i18next";

const generateChartStyle = (labels, data) => {
    return {
        labels: labels,
        datasets: [{
            data: data,
            label: t("transactions"),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
    };

};

const generateOptions = (chartTitle) => {
    return {
        maintainAspectRasio: true,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: t(chartTitle),
                font:
                    { size: "20px" },
                padding: {
                    top: 10,
                    bottom: 10
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    precision: 0
                }
            }
        }
    };
};

export { generateChartStyle, generateOptions };