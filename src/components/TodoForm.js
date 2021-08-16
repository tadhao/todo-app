import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const TodoForm = (props) => {
	const [todoItem, setTodoItem] = useState("");
	const submitHandler = (event) => {
		event.preventDefault();
		if(!todoItem) return;
		props.addTodoList(todoItem)
		setTodoItem("")
	}

    return(
			<Form onSubmit={submitHandler}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Todo List</Form.Label>
    			<Form.Control type="text" placeholder="Add new List" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} />
				</Form.Group>
				<Button variant="primary mb-3" type="submit">
					Submit
				</Button>
			</Form>
    );
}

export default TodoForm;