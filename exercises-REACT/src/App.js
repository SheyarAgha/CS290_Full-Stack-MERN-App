import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navigation from './components/Navigation'
import Home from './pages/Home';
import EditExercise from './pages/EditExercise';
import CreateExercise from './pages/CreateExercise';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/EditExercise" element={ <EditExercise/> }></Route>
            <Route path="/CreateExercise" element={ <CreateExercise/> }></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
