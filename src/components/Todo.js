import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState({ id: '', value: '' });

	return (
		<div>
			<input
				type='text'
				name='todo-input'
				value={inputValue.value}
				onChange={e =>
					setInputValue({ value: e.target.value, id: inputValue.id })
				}
			/>
			<button
				onClick={() => {
					if (inputValue.id) {
						//hier zitten we in de update
						const newToDos = todos.map(todo => {
							if (todo.id === inputValue.id) {
								return { id: todo.id, value: inputValue.value };
							}
							return todo;
						});
						setInputValue({ id: '', value: '' });
						return setTodos(newToDos);
					}
					const id = uuidv4();
					const myTodos = [...todos, { id: id, value: inputValue.value }];
					setInputValue({ id: '', value: '' });
					setTodos(myTodos);
				}}
			>
				Submit
			</button>
			<ul>
				{todos.map(todo => {
					return (
						<TodoItem
							key={todo.id}
							todo={todo}
							setTodos={setTodos}
							todos={todos}
							setInputValue={setInputValue}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default Todo;
