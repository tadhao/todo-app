import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const TodoForm = () => {
	const [todoItem, setTodoItem] = useState("");
	const submitHandler = (event) => {
		event.preventDefault();
	}

    return(
			<Form onSubmit={submitHandler}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Todo List</Form.Label>
    			<Form.Control type="text" placeholder="Add new List" />
				</Form.Group>
				<Button variant="primary mb-3" type="submit">
					Submit
				</Button>
			</Form>
    );
}

export default TodoForm;