import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true}
);

const db = mongoose.connection;

const exerciseSchema = mongoose.Schema({
    name: { type: String, requried: true},
    reps: { type: Number, requried: true},
    weight: { type: Number, requried: true},
    unit: { type: String, requried: true},
    date: { type: String, requried: true}
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
};

const getAllExercises = async () => {
    const result = Exercise.find();
    return result.exec();
};

const findExerciseById = async (_id) => {
    const result = Exercise.findById(_id);
    return result.exec();
};

const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.replaceOne({ _id: _id }, { name: name, reps: reps, weight: weight, unit: unit, date: date });
    return result.modifiedCount;
};

const deleteExerciseById = async (_id) => {
    const result = await Exercise.deleteOne({ _id: _id });
    return result.deletedCount;
};

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export { createExercise, getAllExercises, findExerciseById, replaceExercise, deleteExerciseById }
