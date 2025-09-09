import { use, useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/To-doInput";
import { TodoList } from "./components/To-doList";

function App() {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say hi to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState([
    // { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("All Tasks");
  
  function SaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos:currTodos }));
  }
  function addTodo(newTodo) {
    const updatedTodos = [...todos, { input: newTodo, complete: false }];
    setTodos(updatedTodos);
    SaveData(updatedTodos);
  }
  function editTodo(idx) {
    let newTodos = [...todos]; // copy todos array
    let completedTodo = { ...newTodos[idx] }; // copy the specific todo object
    completedTodo.complete = true; // update property
    newTodos[idx] = completedTodo; // replace with updated object
    setTodos(newTodos); // update state
    SaveData(newTodos);
  }

  function deleteTodo(idx) {
    let newTodos = todos.filter((val, validx) => {
      return validx !== idx;
    });
    setTodos(newTodos);
    SaveData(newTodos);
  }


  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput addTodo={addTodo} />
    </>
  );
}
export default App;
