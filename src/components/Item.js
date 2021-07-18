import { useState } from "react";
import './Item.css'

const Item = props => {

    const [mouse, setMouse] = useState(false)
    const handleMouse = (flag) => {
        return () => {
            setMouse(flag)
        }
    }

    const handleCheck = (id) => {
        return (event) => {
            props.updateTodoItem(id, event.target.checked)
        }
    }

    const handleDelete = (id) => {
        return () => {
            props.deleteTodoItem(id)
        }
    }

    return (
        <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={handleMouse(true)} onMouseLeave={handleMouse(false)}>
            <label>
                <input type="checkbox" checked={props.isDone} onChange={handleCheck(props.id)} />
                <span>{props.name}</span>
            </label>
            <button onClick={handleDelete(props.id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>Delete</button>
        </li>
    )
}

export default Item;