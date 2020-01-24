import React, {useEffect} from 'react';
import Context from './context'
import AddToDo from './ToDo/AddToDo';
import Loader from './Loader.js'


import NotCompletedToDo from './ToDo/NotCompletedToDo'
import CompletedToDo from './ToDo/CompletedToDo';


function App() {

	const [todos, setTodos] = React.useState([])
	const [loading, setLoading] = React.useState(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(todos => {
				setTimeout(() => {
					setTodos(todos)
					setLoading(false)
					console.log(todos)
				}, 2000)
			})
		}, [])

	function toggleToDo(id) {
		setTodos(todos.map(todo => {
			todo.completed = todo.id === id ? !todo.completed : todo.completed
			return todo
		}))
	}

	function removeToDo(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	function addToDo(title) {
		setTodos(todos.concat([
			{title, id: Date.now(), completed: false}
		]))
	}



	return (
		<Context.Provider value={{removeToDo}}>
			<div className="wrapper">
				<h1>todo</h1>

				<AddToDo onCreate={addToDo}/>
				{loading && <Loader/>}
				{!loading && <NotCompletedToDo todos={todos.filter(todo => !todo.completed)} onToggle={toggleToDo}/>}
				{!loading && <CompletedToDo todos={todos.filter(todo => todo.completed)}/>}
				
			</div>
		</Context.Provider>
		
	);
}

export default App;
