import { Todo, Todos } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";

export default function (todosVar: ReactiveVar<Todos>) {
  return (id: number, text: string) => {
    let todosWithEditedTodo = todosVar().map((todo: Todo) => (todo.id === id ? { ...todo, text } : todo));

    todosVar(todosWithEditedTodo);
  };
}
