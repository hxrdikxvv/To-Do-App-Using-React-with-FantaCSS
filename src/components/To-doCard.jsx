export function Todocard(props){
    const {todo,deleteTodo,idx,editTodo}=props;
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
            <button onClick={()=>{
                editTodo(idx);
            }} disabled={todo.complete}>
                <h6>Done</h6>
            </button>
            <button onClick={()=>{
                deleteTodo(idx);
            }}>
                <h6>Delete</h6>
            </button>
            </div>
        </div>
    )
}