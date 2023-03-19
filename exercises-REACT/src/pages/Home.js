import React from "react";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ExerciseList from "../components/ExerciseList";

function Home({ setExerciseToEdit }) {

    const [exercises, setExercises] = useState([]);

    const navigate = useNavigate();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            setExercises(exercises.filter(e => e._id !== _id));
        } else {
            console.error('Failed');
        }
    };

    const onEdit = async exercise => {
        setExerciseToEdit(exercise);
        navigate("/EditExercise");
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            <h2>List of Exercises</h2>
            <ExerciseList exercises={exercises}
            onDelete={onDelete}
            onEdit={onEdit}>
            </ExerciseList>
        </>
    );
}

export default Home;
