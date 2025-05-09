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

// Login route
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

// ✅ Get all employee names (for dropdown)
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find({}, 'naam'); // fetch only names
        res.json(employees);
    } catch (err) {
        console.error("Fetch Employees Error:", err);
        res.status(500).json({ message: "Failed to fetch employees" });
    }
});

// ✅ Add task to employee
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


// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
