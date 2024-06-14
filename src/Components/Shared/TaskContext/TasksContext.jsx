import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError(error);
      setLoading(false);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, error, loading }}>
      {children}
    </TasksContext.Provider>
  );
};
