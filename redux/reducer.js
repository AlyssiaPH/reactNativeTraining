const initialState = {
    todoList: [],
}

const addTodo = (state, action) => {
    return {
        ...state,
        todoList: state.todoList.push(action.item),
    };
};
const removeTodo = (state, action) => {
    let newList;
    newList = Array.from(state.todoList);
        newList.splice(action.index, 1);
    return {
        ...state,
        todoList: newList,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addTodo':
            return addTodo(state, action);
       case 'removeTodo':
            return removeTodo(state, action);
        default:
            return state;
    }
}

export default reducer;
