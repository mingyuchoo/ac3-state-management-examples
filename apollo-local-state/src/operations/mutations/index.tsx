import addTodo from "./addTodo/addTodo";
import clearCompletedTodos from "./clearCompletedTodos/clearCompletedTodos";
import completeTodo from "./completeTodo/completeTodo";
import completeAllTodos from "./completeAllTodos/completeAllTodos";
import createDeleteTodo from "./deleteTodo/deleteTodo";
import editTodo from "./editTodo/editTodo";
import setVisibilityFilter from "./setVisibilityFilter/setVisibilityFilter";
import { todosVar, visibilityFilterVar } from "../../cache";

export const todoMutations = {
  addTodo: addTodo(todosVar),
  clearCompletedTodos: clearCompletedTodos(todosVar),
  completeTodo: completeTodo(todosVar),
  completeAllTodos: completeAllTodos(todosVar),
  deleteTodo: createDeleteTodo(todosVar),
  editTodo: editTodo(todosVar),
  setVisibilityFilter: setVisibilityFilter(visibilityFilterVar),
};
