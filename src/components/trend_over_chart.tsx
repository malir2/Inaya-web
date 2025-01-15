import Chart from "react-apexcharts";

interface TrendOverLastYearProps {
    chartData: number[][];
    selectedCommodity: CommodityName;
}

type CommodityName = "GOLD" | "SILVER" | "WHEAT" | "PALLADIUM";

const TrendOverLastYear = ({ chartData, selectedCommodity }: TrendOverLastYearProps) => {
    const colors: Record<CommodityName, string> = {
        GOLD: "#FFD700",
        SILVER: "#C0C0C0",
        WHEAT: "#F5DEB3",
        PALLADIUM: "#E6E6FA",
    };

    const chartOptions: any = {
        chart: {
            type: "line" as "line",
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
        markers: {
            size: 0, // Disable the dots
        },
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
        colors: Object.values(colors), // Set colors for all lines
    };

    const chartSeries = Object.keys(colors).map((commodity, index) => ({
        name: commodity,
        data: chartData[index],
        color: colors[commodity as CommodityName],
        fill: {
            type: "gradient",
            gradient: selectedCommodity === commodity ? {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: [colors[commodity as CommodityName]],
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.1,
                stops: [0, 100]
            } : {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0,
                gradientToColors: [colors[commodity as CommodityName]],
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [0, 100]
            },
        },
    }));

    return (
        <div className="trend-chart">
            <p className="text-gray-400"><span className="text-green-500">(+5) more</span> in 2023</p>
            <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
        </div>
    );
};

export type { CommodityName };

export default TrendOverLastYear;