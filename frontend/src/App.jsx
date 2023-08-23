import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, removeTodo } from "./features/todosSlice";

function App() {
  // useState input
  const [text, setText] = useState("");
  // Тут мы импортируем сам массив todos
  const todos = useSelector((state) => state.todos);
  // const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  // Reducer
  const dispatch = useDispatch();
  // Управляемый input
  const handleChange = (e) => {
    setText(e.target.value);
  };

  

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  if(loading) {
    return <h1>Loading...</h1>
  }

  //  if(error) {
  //   return <h1>{error}</h1>
  //  }st 

  const handleRemove = (id) => {
    dispatch(removeTodo(id))
  }
  return (
    <div>
      <form action="">
        <input type="text" value={text} onChange={handleChange} />
        <button disabled={!text} type="submit">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}><input type="checkbox"/>{todo.loading ? '...': todo.title}<button disabled={todo.loading} style={{borderRadius: '5px', cursor: 'pointer',  border: 'none', marginLeft: '7px', color: 'red', fontWeight: 700}} onClick={() => handleRemove(todo.id)}>X</button></li>;
        })}
      </ul>
    </div>
  );
}

export default App;
