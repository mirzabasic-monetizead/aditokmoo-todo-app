export const TodoForm = ({ addTodo, inputRef }) => {
    return (
        <form onSubmit={(e) => addTodo(e)}>
            <div className="input-container">
                <input type="text" placeholder="Add Todo..." ref={inputRef} id="todo"/>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}