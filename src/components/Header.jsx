export function Header(props){
    const {todos}=props;
    const todoslength=todos.length;
    let TaskSingularPlural="Task"
    if(todoslength==0 || todoslength==1){
        TaskSingularPlural="Task"
    }else{
        TaskSingularPlural="Tasks"
    }
    return(
        <header>
            <h1 className="text-gradient">You have {todoslength} Open {TaskSingularPlural}.</h1>
        </header>
    );
}