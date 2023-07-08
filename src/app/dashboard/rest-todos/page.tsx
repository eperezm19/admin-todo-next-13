import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "./components";

export default async function restTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <div className="w-full mx-4 px-6 mb-4">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
