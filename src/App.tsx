import { useState } from 'react';
import { Todos } from './components/Todos';

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
	const [todos] = useState(mockTodos);

	return (
		<div className="todoapp">
			<Todos todos={todos} />{' '}
		</div>
	);
};
