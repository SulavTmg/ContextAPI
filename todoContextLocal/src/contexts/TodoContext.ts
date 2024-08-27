import { useContext, createContext } from "react";

export interface TodoType {
    id: number;
    todo: string;
    completed: boolean;
}

interface TodoContextType {
todos: TodoType[];
addTodo: (newTodo: string) => void;
updateTodo: (id: number, newTodo: string) => void;
deleteTodo: (id: number) => void;
toggleComplete: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;