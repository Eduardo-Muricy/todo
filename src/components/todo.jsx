

const todo = ({ todo, remove, completed }) => {


  //const remove = async (id) => {
  //await api.delete(`/todo/${id}`);

  //};
  const handleRemove = () => {
    remove(todo.id);  // Chama a função remove passando o id do todo
  };



  const isCompleted = () => {
    completed(todo.id)

  }

  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className='category'>({todo.category})</p>
      </div>
      <div className="buttons-todo">
        <button className="complete" onClick={isCompleted} >Completar</button>
        <button className="remove" onClick={handleRemove} >X</button>
      </div>
    </div>
  )
}

export default todo