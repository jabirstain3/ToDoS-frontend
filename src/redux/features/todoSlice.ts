import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
    id: string;
    tittle: string;
    description:string;
    isCompleted?: boolean;
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
            state.todos.push({...action.payload,  isCompleted: false});
        },
        
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        togoleComplit: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(todo => todo.id == action.payload);
            task!.isCompleted = !task?.isCompleted;
        }
    }
})

export const { addTodo, removeTodo, togoleComplit } = todoSlice.actions;

export default  todoSlice.reducer;