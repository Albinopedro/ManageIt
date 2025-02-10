export default function ApplicationLogo() {
    return (
        <svg
            className="h-12 w-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Cabe a do chefe */}
            <circle cx="12" cy="7" r="3" fill="#4A90E2" />

            {/* Corpo */}
            <path
                d="M9 18h6"
                stroke="#4A90E2"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Ombros */}
            <path
                d="M6 15h12"
                stroke="#4A90E2"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}
