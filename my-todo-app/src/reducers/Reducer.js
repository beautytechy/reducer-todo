export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NEW_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                todos: [...state.todo, newTodo]
            };
            default:
                return state;
    }
}