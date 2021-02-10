import axios from "axios";
import { Dispatch } from "redux";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = (page: number = 1, limit: number = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS });
			const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos", {
                params: {
                    _page: page,
                    _limit: limit
                }
            });
            dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: data });
		} catch (e) {
			dispatch({
				type: TodoActionTypes.FETCH_TODOS_ERROR,
				payload: `Произошла ошибка при загрузке todos. Ошибка: ${e}`,
			});
		}
	};
};

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}