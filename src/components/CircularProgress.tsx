interface CircularProgressProps {
    percentage: number;
    riskLabel: string;
    theme: string;
    size: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    percentage,
    riskLabel,
    theme,
    size
}) => {
    const radius = 16; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const strokeDashoffset =
        circumference - (percentage / 100) * circumference; // Anticlockwise progress

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
                        <stop offset="0%" stopColor="#f59e0b" /> {/* Amber */}
                        <stop offset="80%" stopColor="#2d2d2d" /> {/* Amber */}
                    </linearGradient>
                </defs>
            </svg>

            {/* Inner Content */}
            <div className={`text-center ${theme === "dark" ? "bg-dark" : "bg-[#133c72]"} w-[9rem] h-[9rem] xl:w-[12rem] xl:h-[12rem] xxl:w-[${size}rem] xxl:h-[${size}rem] flex items-center flex-col justify-center rounded-full`}>
                <div className="text-amber-500 text-lg">⚠️</div>
                <div className="text-[1rem] xl:text-[2rem] xxl:text-[4rem] font-bold text-white font-poppins">{percentage}%</div>
                <div className="text-[0.7rem] xl:text-sm text-gray-400">{riskLabel}</div>
            </div>
        </div>
    );
};

export default CircularProgress;