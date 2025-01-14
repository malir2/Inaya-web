import Chart from "react-apexcharts";

interface TrendOverLastYearProps {
    chartData: number[][];
}

const TrendOverLastYear = ({ chartData }: TrendOverLastYearProps) => {
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
            min: 0,
            max: 100,
            tickAmount: 5,
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
            data: chartData[0],
        },
        {
            name: "Series1",
            data: chartData[1],
        },
        {
            name: "Series2",
            data: chartData[2],
        }
    ];

    return (
        <div className="trend-chart">
            <p className="text-gray-400"><span className="text-green-500">(+5) more</span> in 2023</p>
            <Chart options={chartOptions} series={chartSeries} type="area" height={350} />
        </div>
    );
};

export default TrendOverLastYear;