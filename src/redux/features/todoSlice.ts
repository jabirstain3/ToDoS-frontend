import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
    id: string;
    tittle: string;
    descreption:string;
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
            state.todos.push({...action.payload, isCompleted: false});
        }
    }
})

export const { addTodo } = todoSlice.actions;

export default  todoSlice.reducer;