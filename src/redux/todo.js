import { createReduxModule } from "hooks-for-redux";


const initialState = {
  todoList: [],
};

export const [useTodos, { addTodo, removeTodo }] = createReduxModule(
  "Todos",
  initialState,
  {

    addTodo: (state, todo) => {
      return { ...state, todoList: [...state.todoList, todo] };
    },
    removeTodo: (state, id) => {
      const removedTodos = state.todoList.filter((todo) => todo.id !== id);
      return {
        ...state,
        todoList: removedTodos,
      };
    },
  }
);