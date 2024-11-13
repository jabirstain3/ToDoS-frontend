import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TUpdatableTodoDetails = {
    tittle: string;
    description:string;
    priority: string;
    
}

type TTodos = TUpdatableTodoDetails & {
    id: string;
    isComplited?: boolean;
}
interface IState {
    todos: TTodos[];
}

const initialState: IState = {
    todos: [],
};
const sortTodos = (todos: TTodos[]) => {
    const priorityOrder: { [key in TTodos['priority']]: number } = {
        Urgent: 1,
        Mandatory: 2,
        Normal: 3,
        Optional: 4
    };

    return todos.slice().sort((a, b) => {
            if (a.isComplited !== b.isComplited) {
                return a.isComplited ? 1 : -1;
            }
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodos>) => {
            state.todos.push({...action.payload,  isComplited: false});
            state.todos = sortTodos(state.todos);
        },
        
        updateTodo: (state, action: PayloadAction<{id:string; UpdatedTaskDetails:TUpdatableTodoDetails}>) => {
            const {id , UpdatedTaskDetails} = action.payload
            const updatedTodo = state.todos.find( (todo) =>  todo.id === id )
            if (updatedTodo) {
                updatedTodo.tittle = UpdatedTaskDetails.tittle;
                updatedTodo.description = UpdatedTaskDetails.description;
                updatedTodo.priority = UpdatedTaskDetails.priority;
                state.todos = sortTodos(state.todos);
            }
            console.log(state.todos);
            
        },

        togoleComplit: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(todo => todo.id == action.payload);
            if (task) {
                task.isComplited = !task.isComplited;
                state.todos = sortTodos(state.todos);
            }
        },
        
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    }    
})

export const { addTodo, updateTodo, removeTodo, togoleComplit } = todoSlice.actions;

export default  todoSlice.reducer;