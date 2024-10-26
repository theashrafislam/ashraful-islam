"use client"
import { saveAs } from 'file-saver';

const downloadButton = () => {
    const handleDownload = () => {
        const fileUrl = '/Ashraful_Islam_Resume.pdf';
        saveAs(fileUrl, 'Ashraful_Islam_Resume.pdf');
    }
    return (
        <button onClick={handleDownload} className="bg-orange-500 text-white text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition mt-4">
            Download Resume
        </button>
    );
};

export default downloadButton;