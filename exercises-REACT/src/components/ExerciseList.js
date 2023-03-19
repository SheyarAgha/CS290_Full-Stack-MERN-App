import React from "react";
import ExerciseRow from "./ExerciseRow";

function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <table className="exercise-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise) => <ExerciseRow exercise={exercise}
                onDelete={onDelete}
                onEdit={onEdit}/>)}
            </tbody>
        </table>
    );
};

export default ExerciseList
