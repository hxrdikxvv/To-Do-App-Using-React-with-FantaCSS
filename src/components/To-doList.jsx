import { Todocard } from "./To-doCard";

export function TodoList(props){
    const {todos,selectedTab} = props;
   
    const filtertodolist=selectedTab==='All Tasks'? todos : selectedTab==='Completed Tasks'? todos.filter(val=>val.complete) : todos.filter(val=>!val.complete)
    return (
        <>
        {filtertodolist.map((todo,idx)=>{
            return (
                <Todocard key={idx} {...props} idx={todos.findIndex(val=>val.input==todo.input)} todo={todo}/>
            )
        })}
        </>
    )
}