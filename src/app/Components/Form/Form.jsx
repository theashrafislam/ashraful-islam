import toast from 'react-hot-toast';

const Form = () => {

    const handleFormData = async (e) => {
        e.preventDefault();
        const { name, subject, email, messages } = e.target.elements;
        const formData = {
            name: name.value,
            subject: subject.value,
            email: email.value,
            messages: messages.value
        }
        const response = await fetch('/api/sendEmail', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formData)
        });
        if(response.status === 200){
            e.target.reset();
            toast.success('🌟 Your message has been sent successfully! Thank you for reaching out to me.',);
        }
        else{
            toast.error('⚠️ Oops! Something went wrong. Please try again.')
        }
    }


    return (
        <form onSubmit={handleFormData} className='grid grid-cols-1 gap-6'>
            {/* Name Field */}
            <div className=''>
                <input
                    type='text'
                    placeholder='Name'
                    required
                    name="name"
                    className='w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
            </div>
            {/* Email Field */}
            <div className=''>
                <input
                    required
                    type='email'
                    placeholder='Email'
                    name="email"
                    className='w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
            </div>
            {/* Subject Field */}
            <div className=''>
                <input
                    type='text'
                    required
                    placeholder='Subject'
                    name="subject"
                    className='w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
            </div>
            {/* Message Field */}
            <div className=''>
                <textarea
                    required
                    placeholder='Messages'
                    name="messages"
                    className='w-full px-4 py-2 h-32 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
            </div>
            {/* Submit Button */}
            <div className='text-center'>
                <button
                    type='submit'
                    className='bg-orange-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-orange-600 transition'>
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default Form;