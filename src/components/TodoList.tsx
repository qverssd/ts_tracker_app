import React, { useContext, useState } from "react";
import { TrackerContext } from "../context/TrackerContext";


const TodoList: React.FC = () => {
    const { todos, setTodos } = useContext(TrackerContext)!;
    const [todo, setTodo] = useState('');


    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo('');
    };
    


    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};



export default TodoList;