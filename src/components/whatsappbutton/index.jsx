function WhatsAppButton() {
    return (
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.5a9 9 0 11-16.69 5.24L3 21l4.26-1.12A9 9 0 1121 11.5z"
          />
        </svg>
      </a>
    )
  }
  
  export default WhatsAppButton
  