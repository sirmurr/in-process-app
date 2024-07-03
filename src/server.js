const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

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
  const {
    isNewMember,
    isAppAdmin,
    isTaskAdmin,
    isLeadership,
    memberName,
    memberEmail,
    isInProcessed,
  } = req.body;

  if (!memberName || !memberEmail) {
    return res.status(400).send("Missing User Name or Email");
  }

  //ACTION add additional data validation

  const newUser = {
    id: users.length + 1,
    isNewMember,
    isAppAdmin,
    isTaskAdmin,
    isLeadership,
    memberName,
    memberEmail,
    isInProcessed,
  };

  users.push(newUser);
  res.status(201).send(newUser);
});

// Get All Users: GET /users
app.get("/users", (req, res) => {
  // Logic to get all users
  res.json(users);
});

// Get a Single User: GET /users/:id
app.get("/users/:id", (req, res) => {
  // Logic to get a single user
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }
});

// Update a Book: PUT /users/:id
app.put("/users/:id", (req, res) => {
  // Logic to update a user
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }

  const {
    isNewMember,
    isAppAdmin,
    isTaskAdmin,
    isLeadership,
    memberName,
    memberEmail,
    isInProcessed,
  } = req.body;

  user.isNewMember = isNewMember || user.isNewMember;
  user.isAppAdmin = isAppAdmin || user.isAppAdmin;
  user.isTaskAdmin = isTaskAdmin || user.isTaskAdmin;
  user.isLeadership = isLeadership || user.isLeadership;
  user.memberName = memberName || user.memberName;
  user.memberEmail = memberEmail || user.memberEmail;
  user.isInProcessed = isInProcessed || user.isInProcessed;

  res.send(book);
});

// Delete a Book: DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  // Logic to delete a user
  const userIndex = users.findIndex((u) => u.id === pasreInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  tasks.splice(userIndex, 1);
  res.status(204).send();
});

//// TASKS TABLE CRUD ////
//id, Task Name, Task Details, Task Admin

// Create a Task: POST /tasks
app.post("/tasks", (req, res) => {
  //Logic to add a tasks
  const { taskName, taskDetail, taskAdmin, taskPriority } = req.body;
  if (!taskName || !taskDetail) {
    return res.status(400).send("Missing Task Name or Details");
  }
  if (!taskAdmin) {
    return res
      .status(400)
      .send("Missing Task Administator. Enter as user id of Task Admin");
  }
  if (!taskPriority) {
    return res
      .status(400)
      .send("Missing Task Priority. Enter as number of days after arrival.");
  }

  const newTask = {
    id: tasks.length + 1,
    taskName,
    taskDetail,
    idTaskAdmin,
    taskPriority,
  };
  tasks.push(newTask);
  res.status(201).send(newTask);
});

// Get All Tasks: GET /tasks
app.get("/tasks", (req, res) => {
  // Logic to get all tasks
  res.json(tasks);
});

// Get a Single Task: GET /tasks/:id
app.get("/tasks/:id", (req, res) => {
  // Logic to get a single task
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).send("Task not found");
  }
});

// Update a Task: PUT /tasks/:id
app.put("/tasks/:id", (req, res) => {
  // Logic to update a task
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).send("Task not found");
  }

  const { taskName, taskDetail, taskAdmin, taskPriority } = req.body;

  task.taskName = taskName || task.taskName;
  task.taskDetail = taskDetail || task.taskDetail;
  task.taskAdmin = taskAdmin || task.taskAdmin;
  taskPriority = taskPriority || task.taskPriority;

  res.send(task);
});

// Delete a Task: DELETE /tasks/:id
app.delete("/tasks/:id", (req, res) => {
  // Logic to delete a task
  const taskIndex = tasks.findIndex((t) => t.id === pasreInt(req.params.id));
  if (taskIndex === -1) {
    return res.status(404).send("Task not found");
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

//// Joined task assignment table ////
//id, idMember, idTask, isComplete
app.post("/assignments", (req, res) => {
  // Logic to create new assignment
  const { idUser, idTask } = req.body;
  const isComplete = false; //new assignment not complete by defualt

  if (!idUser || !idTask) {
    return res
      .status(400)
      .send("User ID and Task ID are required to make an assignment");
  }

  // how to post to table NOT CONFIDENT in this one =>

  const newAssignment = {
    id: assignments.length + 1,
    idUser,
    isTask,
    isComplete,
  };
  tasks.push(newAssignment);
  res.status(201).send(newAssignment);
});

app.put("/assignments/:id", (req, res) => {
  //Logic to update the isComplete flag
});
//  - research this
