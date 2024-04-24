"use client";
import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  children: React.ReactNode;
  id: string;
};

export default function Droppable({ children, id }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id: id });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="p-4 text-center">
      {children}
    </div>
  );
}
