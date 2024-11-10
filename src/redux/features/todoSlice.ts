import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
    id: string;
    tittle: string;
    description:string;
    isComplited?: boolean;
}
interface IState {
    todos: TTodos[];
}

const initialState: IState = {
    todos: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodos>) => {
            state.todos.push({...action.payload,  isComplited: false});
        },
        
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        togoleComplit: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(todo => todo.id == action.payload);
            task!.isComplited = !task?.isComplited;
        }
    }
})

export const { addTodo, removeTodo, togoleComplit } = todoSlice.actions;

export default  todoSlice.reducer;