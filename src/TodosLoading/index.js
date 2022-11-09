
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text">Carganto TODOs</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}

export default TodosLoading;