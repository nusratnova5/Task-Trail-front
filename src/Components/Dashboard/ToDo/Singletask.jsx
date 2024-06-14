import React from 'react';

const Singletask = ({ propTask }) => {
    return (
        <div className="card bg-gray-200 text-dark m-5">
            <div className="card-body">
                <p>{propTask?.description}</p>
                <p>Priority: {propTask?.priority}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-white">Ongoing</button>
                    <button className="btn bg-white">Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Singletask;
