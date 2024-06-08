import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const[input, setInput] = useState("") 
	const [todos, setTodos] = useState([])
	function addTodo(){
		let task = {label: input, done: false}
		setTodos([...todos, task]);
		setInput("");
	}
	function deleteTodo(i){
		let newTodos=todos.filter((todo,index)=>index !== i)
		setTodos(newTodos)
		console.log(todos)
	}
	return (
		<div className="text-center">
			<input onChange={(e)=>setInput(e.target.value)}></input>
			<button onClick={()=> addTodo()}>Add Todo</button>
			<div>
				{todos.map((todo, index) => (
                    <div key={index}>{todo.label}
					<button onClick={() => deleteTodo(index)}>Delete</button>
					</div>
					
                ))}
			</div>
		</div>
	);
};

export default Home;
