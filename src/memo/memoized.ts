import { createSelector } from 'reselect';
import { RootState } from '../redux/store';
// Basic selector to get todos from the state
const selectTodos = (state: RootState) => state.todos.todos;

// Memoized selector for sorting todos based on the 'isComplite' status
export const selectSortedTodos = createSelector(
    [selectTodos],
    (todos) => {
        return [...todos].sort((a, b) => Number(a.isComplited) - Number(b.isComplited));
    }
);
