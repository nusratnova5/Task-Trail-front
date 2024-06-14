import React from 'react';

const WhoUsing = () => {
    return (
        <div className='my-10'>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Who Thrives with Our System </h2>

        <div className="flex flex-wrap mt-5 text-left lg:gap-0 gap-5 bg-teal-900 p-10 text-white rounded-lg ">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <h1 className='text-xl font-bold mb-3'>Professionals Using Our System</h1>
            <ul className='list-disc ml-4'>
                <li><p>Developers</p></li>
                <li><p>Small Business Owners</p></li>
            </ul>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 lg:pl-12">
            <h1 className='text-xl font-bold mb-3'>Who Benefits from Our Platform</h1>
                <ul className='list-disc ml-4'>
                <li><p>Developers</p></li>
                <li><p>Corporate Professionals</p></li>
                <li><p>Freelancers</p></li>
                <li><p>Bankers</p></li>
                <li><p>Marketing Teams</p></li>
                <li><p>Small Business Owners</p></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default WhoUsing;