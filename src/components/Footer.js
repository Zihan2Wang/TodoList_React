import './Footer.css'

const Footer = props => {

    const completedTodoCount = props.todos.reduce((pre, todo)=>{return pre + (todo.isDone? 1: 0)}, 0)
    const total = props.todos.length

    const handleCheckAll = event => {
        props.checkAllTodo(event.target.checked)
    }

    const handleDeleteAllCompleted = () => {
        props.deleteAllCompleted()
    }

    return (
        <div className="todo-footer">
            <label>
                <input type="Checkbox" onChange={handleCheckAll} checked={completedTodoCount === total && total !== 0 ? true: false}/>
            </label>
            <span>
                <span>Completed: {completedTodoCount}</span> / Total:{total}
            </span>
            <button onClick={handleDeleteAllCompleted} className="btn btn-danger">Remove completed task(s)</button>
        </div>
    )
}

export default Footer;