import React from 'react';

const ToDo = () => {
    return (
       <>
       <h1 className='text-center text-3xl font-bold'>To-Do</h1>
        <div className='bg-teal-900 rounded-lg py-2 mt-3'>
            <div className="card bg-gray-200 text-dark m-5">
                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p>Priority:High</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-white">Ongoing</button>
                        <button className="btn bg-white">Completed</button>
                    </div>
                </div>
            </div>
            <div className="card bg-gray-200 text-dark m-5">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-white">Ongoing</button>
                        <button className="btn bg-white">Completed</button>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default ToDo;