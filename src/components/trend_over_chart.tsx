import Chart from "react-apexcharts";

interface TrendOverLastYearProps {
    chartData: number[][];
    selectedCommodity: string;
}

type CommodityName = "GOLD" | "SILVER" | "WHEAT" | "PALLADIUM";

const TrendOverLastYear = ({ chartData, selectedCommodity }: TrendOverLastYearProps) => {
    // Define colors for each commodity
    const colors: Record<CommodityName, string> = {
        GOLD: "#FFD700",
        SILVER: "#C0C0C0",
        WHEAT: "#F5DEB3",
        PALLADIUM: "#E6E6FA",
    };

    // Chart options configuration
    const chartOptions: any = {
        chart: {
            type: "area",
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", width: 2 },
        markers: { size: 0 },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisBorder: { show: false },
            labels: { style: { colors: "#FFFFFF", fontSize: "12px" } },
        },
        yaxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
            labels: { style: { colors: "#FFFFFF", fontSize: "12px" } },
        },
        grid: { borderColor: "#444" },
        tooltip: { theme: "dark" },
        colors: Object.values(colors),
    };

    // Prepare chart series data
    const chartSeries = Object.keys(colors).map((commodity, index) => ({
        name: commodity,
        data: chartData[index],
        color: selectedCommodity === commodity ? colors[commodity as CommodityName] : "#444",
        opacity: selectedCommodity === commodity ? 1 : 0.5,
        stroke: { width: selectedCommodity === commodity ? 3 : 1 },
    }));

    // Ensure the selected commodity is shown above all others
    const sortedChartSeries = chartSeries.sort((a) => (a.name === selectedCommodity ? 1 : -1));

    return (
        <div className="trend-chart">
            <p className="text-gray-400 mt-3"><span className="text-[#01B574]">(+5) more</span> in 2023</p>
            <Chart options={chartOptions} series={sortedChartSeries} type="area" height={270} />
        </div>
    );
};

export default TrendOverLastYear;