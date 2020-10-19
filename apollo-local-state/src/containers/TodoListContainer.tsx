import React from "react";
import { visibilityFilterVar, todosVar } from "../cache";
import { Todos } from "../models/Todos";
import { VisibilityFilter, VisibilityFilters } from "../models/VisibilityFilter";
import { todoMutations } from "../operations/mutations";
import TodoList from "../components/TodoList";

function filterTodosByVisibility(visibilityFilter: VisibilityFilter, todos: Todos) {
  switch (visibilityFilter.id) {
    case VisibilityFilters.SHOW_ALL.id:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED.id:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE.id:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + visibilityFilter);
  }
}

export default function () {
  const { completeTodo, deleteTodo, editTodo } = todoMutations;
  const todos = todosVar();
  const filteredTodos = filterTodosByVisibility(visibilityFilterVar(), todos);

  return (
    <TodoList
      filteredTodos={filteredTodos}
      actions={{
        completeTodo,
        deleteTodo,
        editTodo,
      }}
    />
  );
}
