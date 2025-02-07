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
    let gradientColor;
    if (percentage > 70) {
        gradientColor = "#E80202"; // Red
    } else if (percentage > 60) {
        gradientColor = "#E88B02"; // Orange
    } else {
        gradientColor = "#CDE802"; // Amber
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
                    stroke="url(#gradient)" // Applying gradient
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
                {/* Defining Gradient */}
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={`${gradientColor}`} />
                        <stop offset="80%" stopColor={`${gradientColor}03`} />
                    </linearGradient>
                </defs>
            </svg>

            {/* Inner Content */}
            <div className={`text-center ${theme === "dark" ? "bg-dark" : "bg-[#133c72]"} circle-size flex items-center flex-col justify-center rounded-full`}>
                <div className="text-amber-500 text-lg">⚠️</div>
                <div className="font-bold text-white font-poppins percentage">{percentage}%</div>
                {percentage > 70 && <div className="text-gray-400 label">Low Medium Risk</div>}
                {percentage > 60 && <div className="text-gray-400 label">Medium Risk</div>}
                {percentage < 60 && <div className="text-gray-400 label">High Risk</div>}
            </div>
        </div>
    );
};

export default CircularProgress2;