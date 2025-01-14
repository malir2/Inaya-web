import Chart from "react-apexcharts";

interface Commodity {
    name: string;
    riskScore: number;
    time: string;
    image: string;
}

interface TrendOverLastYearProps {
    commodity: Commodity;
    chartData: number[][];
}

const TrendOverLastYear = ({ commodity, chartData }: TrendOverLastYearProps) => {
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
            categories: ["Aug", "Sep", "Oct", "Nov", "Dec"],
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
            <h2 style={{ color: "white" }}>{commodity.name} Trend Over Last Year</h2>
            <Chart options={chartOptions} series={chartSeries} type="area" height={250} />
        </div>
    );
};

export default TrendOverLastYear;