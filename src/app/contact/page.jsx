import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import LiveChatButton from '../Components/LiveChat/LiveChatButton';
import ContactForm from '../Components/Form/Form';


export const metadata = {
    title: 'Contact Ashraful Islam | Get in Touch',
    description: "Reach out to Ashraful Islam for any inquiries or collaboration opportunities. I'm here to assist you with your questions. Send me a message today!",
};

const ContactPage = () => {

    return (
        <>
            <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-6 md:p-10'>
                <LiveChatButton />
                <div className='mb-6 flex justify-start w-full'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-6 relative inline'>
                        Contact Me
                        <span className="absolute left-0 bottom-0 transform translate-y-2">
                            <span className="block w-12 h-1 bg-orange-500"></span>
                            <span className="block w-8 h-0.5 bg-orange-500 mt-1"></span>
                        </span>
                    </h1>
                </div>

                <div className='w-full max-w-6xl mx-auto'>
                    <div className='text-center mb-10'>
                        <h3 className='text-2xl text-orange-500 font-semibold mb-2'>Have You Any Questions?</h3>
                        <p className='text-lg'>I&apos;M AT YOUR SERVICE</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-10'>
                        <div className='flex flex-col items-center'>
                            <a href='tel:+8801639568198'><FaPhoneAlt className='text-orange-500 text-3xl mb-1' /></a>
                            <a href='tel:+8801639568198'><h4 className='text-lg font-semibold'>Call Us On</h4></a>
                            <a href='tel:+8801639568198' className='text-sm text-gray-400'>
                                +880 1639-568198
                            </a>
                        </div>

                        <div className='flex flex-col items-center'>
                            <a href='mailto:theashrafislam@gmail.com'><FaEnvelope className='text-orange-500 text-3xl mb-1' /></a>
                            <a href='mailto:theashrafislam@gmail.com'><h4 className='text-lg font-semibold'>Email</h4></a>
                            <a href='mailto:theashrafislam@gmail.com' className='text-sm text-gray-400'>
                                theashrafislam@gmail.com
                            </a>
                        </div>

                        <div className='flex flex-col items-center'>
                            <a href="https://www.linkedin.com/in/theashrafislam"><FaLinkedin className='text-orange-500 text-3xl mb-1' /></a>
                            <a href="https://www.linkedin.com/in/theashrafislam"><h4 className='text-lg font-semibold'>LinkedIn</h4></a>
                            <a href='https://www.linkedin.com/in/theashrafislam' target='_blank' rel='noopener noreferrer' className='text-sm text-gray-400'>
                                linkedin.com/in/theashrafislam
                            </a>
                        </div>

                        <div className='flex flex-col items-center'>
                            <a href="https://github.com/theashrafislam"><FaGithub className='text-orange-500 text-3xl mb-1' /></a>
                            <a href="https://github.com/theashrafislam"><h4 className='text-lg font-semibold'>GitHub</h4></a>
                            <a href='https://github.com/theashrafislam' target='_blank' rel='noopener noreferrer' className='text-sm text-gray-400'>
                                github.com/theashrafislam
                            </a>
                        </div>
                    </div>

                    <div className='text-center mb-10'>
                        <h3 className='text-2xl font-semibold text-orange-500'>SEND ME AN EMAIL</h3>
                        <p className='text-lg text-gray-400 mt-2'>I&apos;M VERY RESPONSIVE TO MESSAGES</p>
                    </div>

                    <div className='bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto'>
                        {/* form  */}
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>

    );
};

export default ContactPage;