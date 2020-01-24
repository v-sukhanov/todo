import React from 'react'
import ToDoItem from './ToDoItem'
import PropTypes from 'prop-types'


function CompletedToDo({todos}) {
	return (
		<div>
			<h2>Completed</h2>
			{
				todos.map((todo, index) => {
					return <ToDoItem todo={todo} index={index} key={todo.id}/>
				})
			}
		</div>
	)
}

CompletedToDo.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CompletedToDo