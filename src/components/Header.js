import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './Header.css'

const Header = props => {

    const handleKeyUp = event=>{
        const {key, target} = event
        if (key !== "Enter") return
        if (target.value.trim() === ''){
            alert('You have to input something')
            return
        }
        const todoObj = {id: nanoid(), name:target.value, isDone: false}
        props.addTodoItem(todoObj)
        target.value = ''
    }
    
    return (
        <div className="todo-header">
            <input onKeyUp={handleKeyUp} type="text" placeholder="Please enter your task. Press Enter to confirm." />
        </div>
    )
}

Header.propTypes = {
    addTodoItem: PropTypes.func.isRequired
};

export default Header;