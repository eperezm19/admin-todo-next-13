"use client";
import { Todo } from ".prisma/client";
import React from "react";
import { TodosItem } from "./TodosItem";
import * as todoApi from "../helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();
  const updateTodo = async (
    id: string,
    complete: boolean,
    description: string
  ) => {
    const updateTodo = await todoApi.updateTodo(id, complete, description);
    router.refresh();
    return updateTodo;
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} updateTodo={updateTodo} />
      ))}
    </div>
  );
};
