import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import AddToDo from './AddToDo'


const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.5rem 1rem',
		border: '1px solid #ccc',
		borderRadius: '4px',
		marginBottom: '.5rem',
		width: '100%'
	},
	input: {
		marginRight: '1rem',
		cursor: 'pointer'
	},
	button: {
		background: 'red',
		border: 'none',
		color: 'white',
		borderRadius: '50%',
		outline: 'none',
		cursor: 'pointer'
	},
	i: {
		cursor: 'pointer'
	}
}


function ToDoItem({todo, index, onChange}) {
	const {removeToDo} = useContext(Context)
	
	return (
		<li style={styles.li}>
			<span>
				<strong>{index + 1}</strong>
				&nbsp;
				{todo.title}
			</span>
			<span>
				{!todo.completed && <i className="fas fa-check" style={{marginRight: '.7rem'}}  onClick={() => onChange(todo.id)}></i>}
				<i className="fas fa-trash-alt" onClick={removeToDo.bind(null, todo.id)}></i>

			</span>

		</li>
	)
}

ToDoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired
}

export default ToDoItem