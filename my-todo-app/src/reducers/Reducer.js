export const initialState = {
    goals: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
    }]
};

export const reducer = (state, action) => {
    //action is a built-in object that REQUIRES a type property and has an optional payload/data property
    switch (action.type) {
        case "ADD_NEW_TODO":
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state, goals: [...state.goals, newTodo]
            };

        case "TOGGLE_TODO":
            return {...state, goals: state.goals.map(item => {
                    if (item.id === action.payload) return { ...item, completed: !item.completed };
                else{
                    return item;
                }
            })
    }
            //method returns new array

            case "CLEAR_COMPLETED":
return { ...state, completed: state.goals.filter(item => !state.completed) };
            default:
return state;


        }
    }