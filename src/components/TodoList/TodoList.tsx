import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSeletor";

const TodoList: React.FC = () => {
	const { todos, error, loading, page, limit } = useTypedSelector((state) => state.todo);
    const { fetchTodos } = useActions();
    

	useEffect(() => {
        fetchTodos(page, limit);
    }, []);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

	return <div>
        {todos.map(todo => {
            return <div key={todo.id}>{todo.title}</div>
        })}
    </div>;
};

export default TodoList;
