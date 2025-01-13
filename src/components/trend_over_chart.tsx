import Chart from "react-apexcharts";

const TrendOverLastYear = () => {
    const chartOptions: any = {
        chart: {
            type: "area" as "area",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        colors: ["#FFA726", "#FFD54F"],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#FFFFFF",
                    fontSize: "12px",
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#FFFFFF",
                    fontSize: "12px",
                },
            },
        },
        grid: {
            borderColor: "#444",
        },
        tooltip: {
            theme: "dark",
        },
    };

    const chartSeries = [
        {
            name: "Value",
            data: [30, 40, 35, 50, 49, 60, 70],
        },
        {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }
    ];

    return (
        <div className="trend-chart">
            <h3 className="section-title">Trend over last year</h3>
            <Chart options={chartOptions} series={chartSeries} type="area" height={250} />
        </div>
    );
};

export default TrendOverLastYear;