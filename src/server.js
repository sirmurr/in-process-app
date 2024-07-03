const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// temp in-memory 'db' until real db is integerated
let users = [];
let tasks = [];

//// USERS TABLE CRUD ////
//id, isNewMember, isAppAdmin, isTaskAdmin, isLeadership, Member Name, Member Email, isInProcessed

// Create a User: POST /users
app.post("/users", (req, res) => {
  //Logic to add a user
});

// Get All Users: GET /users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get a Single User: GET /users/:id
app.get("/users/:id", (req, res) => {
  // Logic to get a single user
});

// Update a Book: PUT /users/:id
app.put("/users/:id", (req, res) => {
  // Logic to update a user
});

// Delete a Book: DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  // Logic to delete a user
});

//// TASKS TABLE CRUD ////
//id, Task Name, Task Details, Task Admin

// Create a Task: POST /tasks
app.post("/tasks", (req, res) => {
  //Logic to add a tasks
});

// Get All Tasks: GET /tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Get a Single Task: GET /tasks/:id
app.get("/tasks/:id", (req, res) => {
  // Logic to get a single task
});

// Update a Task: PUT /tasks/:id
app.put("/tasks/:id", (req, res) => {
  // Logic to update a task
});

// Delete a Task: DELETE /tasks/:id
app.delete("/tasks/:id", (req, res) => {
  // Logic to delete a task
});

//// Joined task assignment table ////
//id, idMember, idTask, isComplete

//  - research this
