import Image from 'next/image';
import React from 'react';

const LiveChatButton = () => {
    return (
        <div>
            <a 
                href="https://wa.me/8801639568198" 
                target="_blank" 
                className="fixed bottom-5 right-5 bg-gray-200 text-gray-700 py-2 px-3 rounded-full shadow-lg hover:bg-gray-300 flex items-center space-x-2 z-10"
            >
                <Image src="/images/whatsapp.png" alt="Contact with Ashraful Islam" height={30} width={30} />
                <span className="font-medium">Live Chat</span>
            </a>
        </div>
    );
};

export default LiveChatButton;