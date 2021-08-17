import { Button } from 'react-bootstrap'
import './TodoList.css'

const TodoList = (props) => {
    return(
			<div className="todo-listing mb-3" >
				<span style={{textDecoration: props.list.isDone ? 'line-through' : ''}} ><b>{props.list.text}</b></span>
				<div>
					<Button variant="outline-success" onClick={() => props.markDone(props.index)} >Complete</Button>
					<Button variant="outline-danger" onClick={() => props.deleteItem(props.index)} >Delete</Button>
				</div>
			</div>
    );
}

export default TodoList;