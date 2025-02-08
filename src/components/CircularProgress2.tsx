interface CircularProgressProps2 {
    percentage: number;
    theme: string;
}

const CircularProgress2: React.FC<CircularProgressProps2> = ({
    percentage,
    theme,
}) => {
    const radius = 16; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const strokeDashoffset =
        circumference - (percentage / 100) * circumference; // Anticlockwise progress

    // Determine gradient color based on percentage
    let gradientColorStart, gradientColorEnd;
    if (percentage > 70) {
        gradientColorStart = "#E80202"; // Red
        gradientColorEnd = "#E8020203"; // Red with transparency
    } else if (percentage > 60) {
        gradientColorStart = "#E88B02"; // Orange
        gradientColorEnd = "#E88B0203"; // Orange with transparency
    } else {
        gradientColorStart = "#CDE802"; // Amber
        gradientColorEnd = "#CDE80203"; // Amber with transparency
    }

    return (
        <div className="relative w-auto h-auto rounded-full overflow-hidden">
            {/* SVG Circle */}
            <svg
                className="absolute transform rotate-90"
                viewBox="0 0 36 36"
            >
                {/* Background Circle */}
                <circle
                    cx="18"
                    cy="18"
                    r={radius}
                    strokeWidth="2.5"
                    fill="transparent"
                    stroke="#2d2d2d" // Background color
                />
                {/* Gradient Progress Circle */}
                <circle
                    cx="18"
                    cy="18"
                    r={radius}
                    strokeWidth="2.5"
                    fill="transparent"
                    stroke={`url(#gradient-${percentage})`} // Applying gradient
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
                {/* Defining Gradient */}
                <defs>
                    <linearGradient id={`gradient-${percentage}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={gradientColorStart} />
                        <stop offset="80%" stopColor={gradientColorEnd} />
                    </linearGradient>
                </defs>
            </svg>

            {/* Inner Content */}
            <div className={`text-center ${theme === "dark" ? "bg-dark" : "bg-[#133c72]"} circle-size flex items-center flex-col justify-center rounded-full`}>
                <div className="text-amber-500 text-lg">⚠️</div>
                <div className="font-bold text-white font-poppins percentage">{percentage}%</div>
                {percentage > 70 ? (
                    <div className="text-gray-400 label">Low Medium Risk</div>
                ) : percentage > 60 ? (
                    <div className="text-gray-400 label">Medium Risk</div>
                ) : (
                    <div className="text-gray-400 label">High Risk</div>
                )}
            </div>
        </div>
    );
};

export default CircularProgress2;