import React from 'react';

const WorkItem = ({ title, items, details }) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
            {/*espaciado*/}
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='text-lg font-semibold text-white'>{title}</span>
                </p>
                <p className='my-2 text-base font-normal text-white'>{details}</p>
                <span className='my-1 text-sm font-normal leading-none text-white'>{items}</span>
            </li>
        </ol>
    );
};

export default WorkItem;
