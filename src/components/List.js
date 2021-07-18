import Item from '../components/Item';
import PropTypes from 'prop-types'
import './List.css'

const List = props => {
    
    return (
        <ul className="todo-main">
            {
                props.todos.map((todo)=>{
                    return <Item key={todo.id} {...todo} updateTodoItem={props.updateTodoItem} deleteTodoItem={props.deleteTodoItem}/>
                })
            }
        </ul>
    )
}

List.propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodoItem: PropTypes.func.isRequired,
    deleteTodoItem: PropTypes.func.isRequired,
}

export default List;