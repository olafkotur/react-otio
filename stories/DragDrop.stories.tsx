import React from 'react';
import { DragDrop } from '../src/components/DragDrop';

export default {
  title: 'DragDrop',
};

const data = [
  { id: '1', content: 'First' },
  { id: '2', content: 'Second' },
];

const Component = (data: { content: string }) => (
  <div
    style={{ background: data.content === 'First' ? 'green' : 'blue', color: 'white', padding: '10px', margin: '10px' }}
  >
    {data.content}
  </div>
);

const onComplete = ({ _id, position }: { _id: string; position: number }) => {
  console.log(`Moved item with id ${_id} to position ${position}`);
};

export const Horizontal = () => (
  <DragDrop type="horizontal" id="example" uid="id" data={data} onComplete={onComplete} component={Component as any} />
);

export const Vertical = () => (
  <DragDrop type="vertical" id="example" uid="id" data={data} onComplete={onComplete} component={Component as any} />
);
