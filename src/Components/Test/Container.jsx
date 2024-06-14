// src/Container.js
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableItem from './SortableItem';

const Container = ({ id, items, activeItem, fromContainer, toContainer }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div className='bg-gray-200 text-dark m-5 rounded-lg' ref={setNodeRef} style={{ margin: '16px', padding: '8px', border: '1px solid #ccc', width: '200px' }}>
      <SortableContext id={id} items={items.map((item, index) => `${id}:${index}`)} strategy={verticalListSortingStrategy}>
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={`${id}:${index}`}
            item={item}
            isActive={activeItem && activeItem.id === item.id && fromContainer === id}
          />
        ))}
      </SortableContext>
    </div>
  );
};

export default Container;
