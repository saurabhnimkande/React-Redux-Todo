import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const TodoDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const fetchData = (id) => {
    fetch(`http://localhost:3001/todos/${id}`)
      .then((e) => e.json())
      .then((e) => setData(e));
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  console.log(data);
  return (
    <div>
      <Link to="/">Go to Homepage</Link>
      <div>
        <h1>Description : {data.title}</h1>
        <h1>Status : {data.status ? "Completed" : "Not Completed"}</h1>
      </div>
    </div>
  );
};
