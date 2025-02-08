import React from 'react';

interface ParaSectionProps {
    heading: string;
    content: string;
    percent: number;
}

const ParaSection: React.FC<ParaSectionProps> = ({ heading, content, percent }) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="sm:text-[1.2rem] text-white lg:text-[1.3rem] xxl:text-[1.8rem]">{heading}</h1>
                <div className="flex justify-end items-center">
                    <div className="ml-auto shadow-black w-[7.5rem] h-[1rem] bg-gradient-to-r from-[#00A35E] via-[#E6E939] to-[#FF0000] rounded-2xl mr-0 xxl:mr-5 relative">
                        <span style={{ left: `${percent}%` }} className={`absolute top-[-12%] w-[0.5rem] rounded-b-md bg-gray-600 h-[1.3rem]`}></span>
                    </div>
                </div>
            </div>
            <p className='text-white/70 text-[0.8rem] md:text-[0.9rem] xxl:text-[1rem]'>{content}</p>
        </div>
    );
};

export default ParaSection;
