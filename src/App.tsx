import { useState } from 'react';
import { Todos } from './components/Todos';
import { type Todo as TodoType, type TodoId } from './types';

const mockTodos = [
	{
		id: '1',
		title: 'Aprender React',
		completed: true
	},
	{
		id: '2',
		title: 'Sacar ticket',
		completed: false
	},
	{
		id: '3',
		title: 'Enviar maill',
		completed: false
	}
];

export const App = (): JSX.Element => {
	const [todos, setTodos] = useState(mockTodos);

	const handleRemove = ({ id }: TodoId): void => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const handleCompleted = ({
		id,
		completed
	}: Pick<TodoType, 'id' | 'completed'>): void => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed
				};
			}
			return todo;
		});

		setTodos(newTodos);
	};

	return (
		<div className="todoapp">
			<Todos
				onRemoveTodo={handleRemove}
				onToggleCompleteTodo={handleCompleted}
				todos={todos}
			/>{' '}
		</div>
	);
};
