import { Todo, Todos } from "../../../models/Todos";
import { ReactiveVar } from "@apollo/client";

export default function (todosVar: ReactiveVar<Todos>) {
  return () => {
    const allTodosCompleted = todosVar().map((t: Todo) => ({ ...t, completed: true }));

    todosVar(allTodosCompleted);
  };
}
