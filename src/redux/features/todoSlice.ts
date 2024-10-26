import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
    id?: string;
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
            const randomString = Math.random().toString(36).substring(2,7)
            state.todos.push({...action.payload, id: randomString,  isCompleted: false});
        }
    }
})

export const { addTodo } = todoSlice.actions;

export default  todoSlice.reducer;