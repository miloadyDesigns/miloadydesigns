// DropDown.js
import React from 'react';

const DropDown = ({ service, nestedServcies }) => {
    return (
        <div className="dropdown hidden">
            <span className="dropdown-toggle font-myfont uppercase [word-spacing:2px]">{service}</span>

            <ul className="dropdown-menu">
                <div className='flex flex-row'>
                    <div className='m-2'>
                        <div className='bg-[#19191A] w-[320px] h-full rounded-lg flex flex-col'>
                            {/* Additional content can go here */}
                            <div className='flex justify-around flex-row items-center'>
                                <div className='font-pp text-xl'>
                                    <h1>Get In Touch</h1>
                                </div>
                                <button className="button mt-4">
                                    <p className="button__text">
                                        {['-', '-', '-', ' ', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'].map((char, index) => (
                                            <span key={index} style={{ '--index': index }}>
                                                {char}
                                            </span>
                                        ))}
                                    </p>

                                    <div className="button__circle">
                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="button__icon"
                                            width="14"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>

                                        <svg
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            width="14"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="button__icon button__icon--copy"
                                        >
                                            <path
                                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className='mt-auto font-text ml-3 mr-3 mb-3 text-xl'>
                                Let us help you to launch your business.
                            </div>

                        </div>
                    </div>
                    <div className=''>
                        {nestedServcies.map((service) => {
                            return (
                                <div key={service.id}>
                                    <li>{service.name}</li>
                                    <p className='font-text'>{service.description}</p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </ul>
        </div>
    );
};

export default DropDown;
