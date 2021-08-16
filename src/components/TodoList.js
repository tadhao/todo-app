const TodoList = (props) => {
    return(
        <div>
            <span><b>{props.list.text}</b></span>
        </div>
    );
}

export default TodoList;