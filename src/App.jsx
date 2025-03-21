import { useEffect, useState } from 'react';
import Todo from "./components/todo"
import TodoForm from "./components/TodoForm"
import Search from './components/Search';
import Filter from './components/Filter';
import api from '../src/services/api'
import "./App.css";

function App() {
  
  const [todos, setTodos] = useState([])



  async function getTodos(){
    const todoFromApi= await api.get('/todo')
    setTodos(todoFromApi.data)
  }
  

    useEffect(()=>{
      getTodos()
    },[])

  const [search, setSearch]= useState("")

const [filter, setFilter]= useState("All")
const [sort, setSort] = useState("Asc")

const addTodo = (text, category)=>{
  const newTodos = [...todos,{
    id: Math.floor(Math.random()*10000),
    text,
    category,
    isCompleted: false
  }]
  setTodos(newTodos)
  
}
const remove = async (id) => {
  await api.delete(`/todo/${id}`);
  setTodos(todos.filter(todo => todo.id !== id));
};

const completed = async (id) => {
 
  
    await api.put(`/todo/${id}`, { isCompleted: true });

    
    setTodos(oldTodos =>
      oldTodos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );

    
    getTodos();

  
    
};


  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo-list">
        {todos
        .filter((todo)=> filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo)=>todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a,b)=> sort=== "Asc" ? a.text.localeCompare(b.text): b.text.localeCompare(a.text))
        .map((todo) => (
          <Todo key={todo.id} todo={todo} remove={remove} completed={completed} />
        ))}
      </div>
      <TodoForm  addTodo={addTodo} getTodos={getTodos}/>

    </div>
    
  )

}
//
export default App
/*

*/