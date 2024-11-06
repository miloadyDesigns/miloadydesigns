import React from 'react';
import './ContactForm.css'; // Import CSS file if needed
import Footer from '../Footer';

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="w-full">
            <div className="bg-gray-700 bg-opacity-30 backdrop-blur-xl rounded-lg shadow-lg p-8 w-full ">
                <form onSubmit={handleSubmit} className="lg:space-y-6 xs:space-x-2">
                    <div className="flex flex-col lg:space-y-4">
                        <div className="flex lg:flex-row xs:flex-col lg:justify-between">
                            <div className="w-full lg:mr-2">
                                <label htmlFor="name" className="block font-medium mx-2 my-2 text-white">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 w-[100%] rounded-full focus:outline-none focus:border-black transition duration-200 text-white"
                                    placeholder="Enter Name"
                                    required
                                />
                            </div>
                            <div className="w-full lg:ml-2">
                                <label htmlFor="email" className="block font-medium mx-2 my-2 text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 w-[100%] rounded-full focus:outline-none focus:border-black transition duration-200 text-white"
                                    placeholder="Enter Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex lg:flex-row xs:flex-col lg:justify-between">
                            <div className="w-full lg:mr-2">
                                <label htmlFor="service" className="block font-medium mx-2 my-2 text-white">Services</label>
                                <select
                                    id="service"
                                    className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 w-[100%] rounded-full focus:outline-none focus:border-black transition duration-200 text-gray-400"
                                    required
                                >
                                    <option value="" disabled selected>Select Service</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Digital Marketing">Content Writing</option>
                                    <option value="SEO Optimization">SEO Optimization</option>
                                </select>
                            </div>
                            <div className="w-full lg:ml-2">
                                <label htmlFor="contact" className="block font-medium mx-2 my-2 text-white">Contact No</label>
                                <input
                                    type="tel"
                                    id="contact"
                                    className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 w-[100%] rounded-full focus:outline-none focus:border-black transition duration-200 text-white"
                                    placeholder="Enter Contact"
                                    required
                                />
                            </div>
                        </div>
                        <div className='xs:hidden lg:block'>
                            <label htmlFor="message" className="block font-medium mx-2 my-2 text-white">Message</label>
                            <textarea
                                id="message"
                                cols={16}
                                rows={6}
                                placeholder="Enter Message"
                                className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 rounded-lg w-full focus:outline-none focus:border-black transition duration-200 text-white"
                            />
                        </div>
                        <div className='xs:block lg:hidden'>
                            <label htmlFor="message" className="block font-medium mx-2 my-2 text-white">Message</label>
                            <textarea
                                id="message"
                                cols={12}
                                rows={3}
                                placeholder="Enter Message"
                                className="bg-transparent border border-gray-400 xs:p-3 lg:p-4 rounded-lg w-full focus:outline-none focus:border-black transition duration-200 text-white"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white font-semibold py-3 rounded-full hover:bg-red-600 transition duration-200 "
                    >
                        Submit
                    </button>

                </form>
            </div>
            <div className='lg:hidden xs:block'>
                <Footer />
            </div>
        </div>
    );
};

export default ContactForm;
