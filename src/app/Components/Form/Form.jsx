"use client"
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const handleFormData = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { name, subject, email, messages } = e.target.elements;
        const formData = {
            name: name.value,
            subject: subject.value,
            email: email.value,
            messages: messages.value
        };

        try {
            const response = await fetch('/api/sendEmail', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                e.target.reset();
                toast.success('🌟 Your message has been sent successfully! Thank you for reaching out to me.');
            } else {
                toast.error('⚠️ Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('⚠️ Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleFormData} className='grid grid-cols-1 gap-6'>
            {/* Name Field */}
            <div>
                <input
                    type='text'
                    placeholder='Name'
                    required
                    name="name"
                    className='w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
            </div>
            {/* Email Field */}
            <div>
                <input
                    required
                    type='email'
                    placeholder='Email'
                    name="email"
                    className='w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
            </div>
            {/* Subject Field */}
            <div>
                <input
                    type='text'
                    required
                    placeholder='Subject'
                    name="subject"
                    className='w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
            </div>
            {/* Message Field */}
            <div>
                <textarea
                    required
                    placeholder='Messages'
                    name="messages"
                    className='w-full px-4 py-2 h-32 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
            </div>
            {/* Submit Button */}
            <div className='text-start md:text-center'>
                <button
                    type='submit'
                    disabled={loading}
                    className={`bg-orange-500 text-white text-lg px-6 py-3 rounded-lg transition ${loading ? 'cursor-not-allowed bg-orange-400' : 'hover:bg-orange-600'}`}
                >
                    {loading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;