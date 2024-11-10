import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
    id: string;
    tittle: string;
    description:string;
    priority: string;
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

    return todos
        .slice()
        .sort((a, b) => {
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
        
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        togoleComplit: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(todo => todo.id == action.payload);
            if (task) {
                task.isComplited = !task.isComplited;
                state.todos = sortTodos(state.todos);
            }
        }
    }    
})

export const { addTodo, removeTodo, togoleComplit } = todoSlice.actions;

export default  todoSlice.reducer;