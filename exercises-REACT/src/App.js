import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from './components/Navigation'
import Home from './pages/Home';
import EditExercise from './pages/EditExercise';
import CreateExercise from './pages/CreateExercise';


function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Tracker</h1>
        <p>
          Full Stack MERN App Demo allowing you to create, edit, 
          and delete data on exercises
        </p>
        </header>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home setExerciseToEdit={setExerciseToEdit}/>}></Route>
            <Route path="/EditExercise" element={<EditExercise exerciseToEdit={exerciseToEdit}/>}></Route>
            <Route path="/CreateExercise" element={<CreateExercise/>}></Route>
          </Routes>
        </Router>
      <footer className="App-footer">
        <p>© 2023 Sheyar Abdullah</p>
      </footer>
    </div>
  );
}

export default App;
