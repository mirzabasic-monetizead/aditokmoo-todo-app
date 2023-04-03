import { FaTimes } from 'react-icons/fa';

export const TodoItem = ({ filterTodos, handleCheck, deleteTodo }) => {
	return (
		<div className="item">
			{filterTodos.map(({task, isChecked}, index) => (
				<p key={index}>
					<input type="checkbox" id='checkbox' checked={isChecked} onChange={(e) => handleCheck(e, index)} />
					<span>{task}</span>
					<FaTimes className="delete-icon" onClick={() => deleteTodo(index)} />
				</p>
			))}
		</div>
	);
};
