import React from 'react';

const TodoItem = ({ todo, setTodos, todos, setInputValue }) => {
	return (
		<li key={todo.id}>
			{todo.value}
			<button onClick={() => setInputValue(todo)}>Update</button>
			<button
				onClick={() => {
					const filteredTodos = todos.filter(td => td.id !== todo.id);
					setTodos(filteredTodos);
				}}
			>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
