// Components
import { TodoItem } from './TodoItem';

export const TodoList = ({ filterTodos, handleCheck, deleteTodo }) => {
	return (
		<section className="section">
			<div className="todo-list-section">
				<TodoItem filterTodos={filterTodos} handleCheck={handleCheck} deleteTodo={deleteTodo} />
			</div>
		</section>
	);
};
