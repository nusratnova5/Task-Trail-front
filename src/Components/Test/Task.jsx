import React, { useEffect, useState } from 'react';
import { DndContext, useSensor, useSensors } from '@dnd-kit/core';
import { MouseSensor, KeyboardSensor } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Container from './Container';
import axios from 'axios';

const Task = () => {
  const [data, setData] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [fromContainer, setFromContainer] = useState(null);
  const [toContainer, setToContainer] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
      const allTasks = response.data;

      const todoTasks = allTasks.filter(task => task?.status === 1);
      const onGoingTasks = allTasks.filter(task => task?.status === 2);
      const completedTasks = allTasks.filter(task => task?.status === 3);

      setData({ container1: todoTasks, container2: onGoingTasks, container3: completedTasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    const { active } = event;
    const [container, index] = active.id.split(':');
    setActiveItem(data[container][index]);
    setFromContainer(container);
  };

  const handleDragOver = (event) => {
    const { over } = event;
    if (over) {
      setToContainer(over.id.split(':')[0]);
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    setActiveItem(null);
    setFromContainer(null);
    setToContainer(null);

    if (!over) return;

    const [fromContainer, fromIndex] = active.id.split(':');
    const [toContainer, toIndex] = over.id.split(':');

    if (fromContainer === toContainer && fromIndex === toIndex) return;

    const newData = { ...data };
    const [movedItem] = newData[fromContainer].splice(fromIndex, 1);
    newData[toContainer].splice(toIndex, 0, movedItem);

    setData(newData);

    let status;
    if (toContainer === 'container1') {
      status = 1;
    } else if (toContainer === 'container2') {
      status = 2;
    } else if (toContainer === 'container3') {
      status = 3;
    }

    const requestBody = { status };
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/tasks/${movedItem?._id}`, requestBody);
      console.log('Task updated successfully:', response);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const containerNames = {
    container1: 'To Do',
    container2: 'Ongoing',
    container3: 'Completed',
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="App" style={{ display: 'flex', gap: '16px' }}>
        {Object.keys(data).map((containerId) => (
          <div key={containerId} className='bg-teal-900 rounded-lg'>
            <h2 className='text-center text-white font-bold text-2xl'>{containerNames[containerId]}</h2>
            <Container
              id={containerId}
              items={data[containerId]}
              activeItem={activeItem}
              fromContainer={fromContainer}
              toContainer={toContainer}
            />
          </div>
        ))}
      </div>
      {activeItem && (
        <div style={{ marginTop: '20px' }}>
          Moving item: {activeItem.content} from {containerNames[fromContainer]} to {containerNames[toContainer]}
        </div>
      )}
    </DndContext>
  );
};

export default Task;
