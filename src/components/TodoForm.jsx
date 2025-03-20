

import { useState, useRef } from 'react'
import api from '../services/api'


const TodoForm = ({ addTodo, getTodos }) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const inputText= useRef()
    const inputCategory= useRef()


     
 async function createTodo(){
    


    const options = Array.from(inputCategory.current.options)
  .map((option) => option.value)
  .filter((value) => value); // Remove strings vazias
console.log(options);

    await api.post('/todo',{
    text:inputText.current.value,
    category:inputCategory.current.value,
    isCompleted: false
    
   })
   console.log(inputCategory.current.value)
   getTodos()
 }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return
        
        addTodo(value, category)
        setValue("")
        setCategory("")
    }
    return (
        <div className='todo-form'>
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input  type="text" placeholder='Digite o título' value={value} ref={inputText} onChange={(e) => setValue(e.target.value)} />
                <select ref={inputCategory} value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho" >Trabalho</option>
                    <option value="Pessoal" >Pessoal</option>
                    <option value="Estudos" >Estudos</option>
                </select>
                <button onClick={createTodo} type="submit">Criar tarefa</button>
            </form>
            
        </div>
       
    )
    
}


 
export default TodoForm 