import React, { useContext, useEffect} from "react";
import { TrackerContext } from "../context/TrackerContext";


const TimeTracker: React.FC = () => {
    const { timeSpent, setTimeSpent } = useContext(TrackerContext)!;


    useEffect(() => {
        const interval = setInterval(() => {
            setTimeSpent(prev => ({
                ...prev,
                'currentApp': (prev['currentApp'] || 0) + 1
            }));
        }, 1000);


        return () => clearInterval(interval);
    }, [setTimeSpent]);


    return (
        <div>
            <h2>Time Tracker</h2>
            <p>Current App: {timeSpent['currentApp'] || 0} seconds</p>
        </div>
    );
};



export default TimeTracker;