"use client";
import { saveAs } from 'file-saver';
import toast from 'react-hot-toast';
import { useState } from 'react';

const DownloadButton = () => {
    const [loading, setLoading] = useState(false);

    // const handleDownload = () => {
    //     setLoading(true);
    //     const fileUrl = '/Ashraful_Islam_Resume.pdf';

    //     try {
    //         saveAs(fileUrl, 'Ashraful_Islam_Resume.pdf');
    //         toast.success("Download started successfully!");
    //     } catch (error) {
    //         toast.error("Failed to download resume.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleDownload = () => {
        setLoading(true);
        const fileUrl = '/Ashraful_Islam_Resume.pdf';
    
        setTimeout(() => {
            try {
                saveAs(fileUrl, 'Ashraful_Islam_Resume.pdf');
                toast.success("Download started successfully!");
            } catch (error) {
                toast.error("Failed to download resume.");
            } finally {
                setLoading(false);
            }
        }, 1000);
    };

    return (
        <button
            onClick={handleDownload}
            disabled={loading}
            className={`bg-orange-500 text-white text-lg px-6 py-3 rounded-lg transition ${
                loading ? 'cursor-not-allowed bg-orange-400' : 'hover:bg-orange-600'
            }`}
        >
            {loading ? (
                <span className="flex items-center justify-center">
                    <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                    </svg>
                    Downloading...
                </span>
            ) : (
                'Download CV'
            )}
        </button>
    );
};

export default DownloadButton;