import React, { useEffect, useState } from 'react';
import CompletedSingleTask from './CompletedSingleTask';
import axios from 'axios';

const Completed = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            throw error; // Rethrow the error to handle it outside
        }
    }
    return (
        <>
            <h1 className='text-center text-3xl font-bold'>Completed task</h1>
            
             <div className='bg-teal-900 rounded-lg py-2'>
             {tasks?.map(task => (
                <CompletedSingleTask propTask={task} allTasks={tasks} setTasks={setTasks} key={task._id} />
            ))}
             </div>
        </>
    );
};

export default Completed;