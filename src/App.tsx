import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Notes from './components/Notes';
import TimeTracker from './components/TimeTracker';
import TodoList from './components/TodoList';
import './styles/style.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<h1>Welcome to the Tracker App</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/time-tracker" element={<TimeTracker />} />
          <Route path="/note" element={<Notes />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;