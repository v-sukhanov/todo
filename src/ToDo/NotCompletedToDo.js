import React from 'react'
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types'


function NotCompletedToDo({todos, onToggle}) {
	return (
		<div>
			<h2>Not Completed</h2>
			{
				todos.map((todo, index) => {
					return <ToDoItem todo={todo} index={index} onChange={onToggle} key={todo.id}/>
				})
			}
		</div>
	)
}

NotCompletedToDo.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired
}

export default NotCompletedToDo