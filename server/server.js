const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Employee = require('./models/employee'); // Your Employee model
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/EMA', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// ====================== USER AUTH + MANAGEMENT =======================

// 🔐 Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const employee = await Employee.findOne({ email });

        if (!employee) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (employee.password !== password) {
            return res.status(401).json({ success: false, message: "Incorrect password" });
        }

        return res.status(200).json({ success: true, employee });
    } catch (err) {
        console.error("Login Error:", err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

// 👤 Add new employee (form submission)
app.post('/api/employees', async (req, res) => {
    try {
        const { naam, email, password } = req.body;

        if (!naam || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const existing = await Employee.findOne({ email });
        if (existing) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        const newEmployee = new Employee({
            naam,
            email,
            password,
            tasks: [] // 🆕 Empty task list
        });

        await newEmployee.save();
        return res.status(201).json({
            message: 'Employee added successfully',
            employeeId: newEmployee._id,
        });
    } catch (err) {
        console.error("Add Employee Error:", err);
        return res.status(500).json({ error: "Server error while adding employee" });
    }
});

// ======================== EMPLOYEE TASK ROUTES ========================

// 📋 Get all employee names
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find({}, 'naam');
        res.json(employees);
    } catch (err) {
        console.error("Fetch Employees Error:", err);
        res.status(500).json({ message: "Failed to fetch employees" });
    }
});

// 📝 Assign task by name
app.post('/assign-task', async (req, res) => {
    const { employeeName, title, description, date, category, priority } = req.body;

    try {
        const employee = await Employee.findOne({ naam: employeeName });

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        const newTask = {
            title,
            description,
            date,
            category,
            priority,
            active: true,
            newTask: true,
            completed: false,
            failed: false
        };

        employee.tasks.push(newTask);
        await employee.save();

        res.status(200).json({ success: true, message: "Task assigned successfully", employee });
    } catch (err) {
        console.error("Task Assignment Error:", err);
        res.status(500).json({ success: false, message: "Error assigning task" });
    }
});

// 📝 Assign task by ID
app.post('/api/employees/:id/tasks', async (req, res) => {
    const employeeId = req.params.id;
    const { title, description, date, category, priority } = req.body;

    try {
        const employee = await Employee.findById(employeeId);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        const newTask = {
            title,
            description,
            date,
            category,
            priority,
            active: true,
            newTask: true,
            completed: false,
            failed: false
        };

        employee.tasks.push(newTask);
        await employee.save();

        res.status(200).json({ success: true, message: "Task assigned", employee });
    } catch (err) {
        console.error("Error saving task:", err);
        res.status(500).json({ message: "Failed to assign task" });
    }
});

// ✅ Update task status
app.put('/api/employees/update-task-status', async (req, res) => {
    const { email, naam, index, status } = req.body;

    try {
        const employee = await Employee.findOne({ email, naam });

        if (!employee || !employee.tasks[index]) {
            return res.status(404).json({ success: false, message: "Task or employee not found" });
        }

        // Update task status
        const task = employee.tasks[index];
        task.newTask = false;
        task.completed = false;
        task.active = false;
        task.failed = false;

        if (status === 'completed') task.completed = true;
        else if (status === 'accepted') task.active = true;
        else if (status === 'failed') task.failed = true;
        else task.newTask = true;

        await employee.save();

        res.status(200).json({ success: true, message: "Task status updated", tasks: employee.tasks });
    } catch (err) {
        console.error("Task Update Error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// ======================== START SERVER ========================
app.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
});
