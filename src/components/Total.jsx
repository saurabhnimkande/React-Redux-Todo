import { useSelector } from "react-redux";

export const Total = () => {
  const { todos } = useSelector((state) => ({
    loading: state.todoReducer.loading,
    todos: state.todoReducer.todos,
    error: state.todoReducer.error,
  }));
  return <div>Total Todos : {todos.length}</div>;
};
