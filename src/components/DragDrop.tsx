import { HTMLMotionProps, motion } from 'framer-motion';
import React, { PropsWithChildren, ReactElement, useCallback } from 'react';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export interface DragDropProps extends HTMLMotionProps<'div'> {
  type: 'horizontal' | 'vertical';
  id: string;
  uid: string;
  data: object[];
  component: (data: object) => ReactElement;
  setDragging?: (value: boolean) => void;
  onComplete: ({ _id, position }: { _id: string; position: number }) => void;
}

const Container = styled(motion.div)<Pick<DragDropProps, 'type'>>`
  display: flex;
  flex-direction: ${(props) => (props.type === 'horizontal' ? 'row' : 'column')};
`;

export const DragDrop = ({
  type,
  id,
  uid,
  data,
  component,
  setDragging,
  onComplete,
  ...props
}: PropsWithChildren<DragDropProps>): ReactElement => {
  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const { reason, draggableId, destination } = result;
      if (reason === 'DROP' && destination != null) {
        onComplete({ _id: draggableId, position: destination.index });
      }

      setDragging?.(false);
    },
    [setDragging],
  );

  return (
    <DragDropContext onBeforeDragStart={() => setDragging?.(true)} onDragEnd={handleDragEnd}>
      <Droppable droppableId={id} type={type} direction={type}>
        {(provided) => (
          <Container ref={provided.innerRef} type={type} {...props}>
            {data.map((value: any, index) => (
              <Draggable key={value[uid]} draggableId={value[uid]} index={index}>
                {(provided) => (
                  <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    {component(value)}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};
