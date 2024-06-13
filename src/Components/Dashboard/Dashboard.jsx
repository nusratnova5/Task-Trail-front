import React from 'react';
import ToDo from './ToDo/ToDo';
import CompletedTask from './CompletedTask/CompletedTask';
import OngoingTask from './OngoingTask/OngoingTask';


const Dashboard = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {/* TO DO */}
            <div>
               <ToDo/>
            </div>
            <div>
                <OngoingTask/>

            </div>
            <div>
               <CompletedTask/>
            </div>
        </div>
    );
};

export default Dashboard;