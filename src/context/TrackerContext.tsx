import React, { createContext, useState, ReactNode} from "react";

interface TrackerContextProps {
    timeSpent: { [key: string]: number };
    setTimeSpent: React.Dispatch<React.SetStateAction< {[key: string]: number}>>;
    notes: string[];
    setNotes: React.Dispatch<React.SetStateAction<string[]>>;
    todos: string[];
    setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TrackerContext = createContext<TrackerContextProps | undefined>(undefined);

export const TrackerProvider = ({ children }: { children: ReactNode }) => {
    const [timeSpent, setTimeSpent] = useState<{ [key: string]: number }>({});
    const [notes, setNotes] = useState<string[]>([]);
    const [todos, setTodos] = useState<string[]>([]);

    

    return (
        <TrackerContext.Provider value={{timeSpent, setTimeSpent, notes, setNotes, todos, setTodos}}>
            {children}
        </TrackerContext.Provider>
    );
};