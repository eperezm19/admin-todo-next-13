"use client";
import { Todo } from "@prisma/client";
import styles from "./TodosItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  updateTodo: (
    id: string,
    complete: boolean,
    description: string
  ) => Promise<Todo | void>;
}

export const TodosItem = ({ todo, updateTodo }: Props) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => updateTodo(todo.id, !todo.complete, todo.description)}
          className={`flex gap-2 rounded-md cursor-pointer hover:bg-opacity-60 ${
            todo.complete ? "bg-blue-100" : "bg-red-100"
          } `}
        >
          {todo.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
