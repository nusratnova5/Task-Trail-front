import React, { useEffect, useState } from 'react';
import OngoingSingleTask from './OngoingSingleTask'
import axios from 'axios';

const OngoingTask = () => {
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
             <h1 className='text-center text-3xl font-bold'>To-Do</h1>
             <div className='bg-teal-900 rounded-lg py-2'>
             {tasks?.map(task => (
                <OngoingSingleTask propTask={task} allTasks={tasks} setTasks={setTasks} key={task._id} />
            ))}
             </div>
            
        </>
    );
};

export default OngoingTask;