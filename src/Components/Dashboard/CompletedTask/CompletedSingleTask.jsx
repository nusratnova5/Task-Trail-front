import React from 'react';

const CompletedSingleTask = ({propTask}) => {
    return (
        <div className='bg-teal-900 rounded-lg'>
                <div className="card bg-gray-200 text-dark m-5">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>{propTask?.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-white">Details</button>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default CompletedSingleTask;