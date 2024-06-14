// src/App.js
import React, { useEffect, useState } from 'react';
import { DndContext, useSensor, useSensors } from '@dnd-kit/core';
import { MouseSensor, KeyboardSensor } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Container from './Container';
import axios from 'axios';

// const initialData = {
//   container1: [
//     { id: 'item1', content: 'Item 1' },
//     { id: 'item2', content: 'Item 2' },
//     { id: 'item3', content: 'Item 3' },
//   ],
//   container2: [
//     { id: 'item4', content: 'Item 4' },
//     { id: 'item5', content: 'Item 5' },
//   ],
//   container3: [],
// };

const Task = () => {
  const [data, setData] = useState({});


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

      setData({container1: todoTasks, container2: onGoingTasks, container3: completedTasks});
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };




  
  const [activeItem, setActiveItem] = useState(null);
  const [fromContainer, setFromContainer] = useState(null);
  const [toContainer, setToContainer] = useState(null);
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
    console.log(event)
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
    console.log(movedItem);

    let status;

    if (toContainer == "container1") {
      status = 1;
    } else if (toContainer == "container2") {
      status = 2;
    } else if (toContainer == "container3") {
      status = 3;
    }

    const requestBody = {
      status
    }

    const response = await axios.put(`${import.meta.env.VITE_API_URL}/tasks/${movedItem?._id}`, requestBody);
    console.log('Task created successfully:', response);

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
          <Container
            key={containerId}
            id={containerId}
            items={data[containerId]}
            activeItem={activeItem}
            fromContainer={fromContainer}
            toContainer={toContainer}
          />
        ))}
      </div>
      {activeItem && (
        <div style={{ marginTop: '20px' }}>
          Moving item: {activeItem.title} from {fromContainer} to {toContainer}
        </div>
      )}
    </DndContext>
  );
};

export default Task;
