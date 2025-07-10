const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task Sub-Schema
const taskSchema = new Schema({
    active: { type: Boolean, default: false },
    newTask: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    failed: { type: Boolean, default: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true },
    priority: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' }
});

// Employee Schema
const employeeSchema = new Schema({
    naam: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tasks: [taskSchema],
    type: { type: String, enum: ['admin', 'employee'], default: 'employee' } // Added type field
}, { timestamps: true });

// Employee Model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
