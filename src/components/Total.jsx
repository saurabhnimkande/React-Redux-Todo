import { useSelector } from "react-redux";

export const Total = () => {
  const { todos } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
  }));
  return <div>Total Todos : {todos.length}</div>;
};
