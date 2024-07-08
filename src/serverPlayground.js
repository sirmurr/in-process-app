const express = require("express");
const knex = require("knex")(require("./knexfile").development);
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Application up and running!");
});

//// USERS TABLE CRUD ////-----------------------------------------------------------------------------------------------------
//id, isNewMember, isAppAdmin, isTaskAdmin, isLeadership, Member Name, Member Email, isInProcessed

// Create a User: POST /users
app.post("/users", async (req, res) => {
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

  try {
    const [newUser] = await knex("users")
      .insert({
        isNewMember,
        isAppAdmin,
        isTaskAdmin,
        isLeadership,
        memberName,
        memberEmail,
        isInProcessed,
      })
      .returning("*");

    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get All Users: GET /users
app.get("/users", async (req, res) => {
  // Logic to get all users
  try {
    const users = await knex("users").select("*");
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a Single User: GET /users/:id
app.get("/users/:id", async (req, res) => {
  // Logic to get a single user
  try {
    const user = await knex("users").where("id", req.params.id).first();
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a Book: PUT /users/:id
app.put("/users/:id", async (req, res) => {
  // Logic to update a user
  const {
    isNewMember,
    isAppAdmin,
    isTaskAdmin,
    isLeadership,
    memberName,
    memberEmail,
    isInProcessed,
  } = req.body;

  try {
    const updatedUser = await knex("users")
      .where("id", req.params.id)
      .update({
        isNewMember,
        isAppAdmin,
        isTaskAdmin,
        isLeadership,
        memberName,
        memberEmail,
        isInProcessed,
      })
      .returning("*");

    if (!updatedUser.length) {
      return res.status(404).send("User not found");
    }

    res.json(updatedUser[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a Book: DELETE /users/:id
app.delete("/users/:id", async (req, res) => {
  // Logic to delete a user
  try {
    const deleted = await knex("users").where("id", req.params.id).del();
    if (!deleted) {
      return res.status(404).send("User not found");
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//// TASKS TABLE CRUD ////-------------------------------------------------------------------------------------------------------------------
//id, Task Name, Task Details, Task Admin

// Create a Task: POST /tasks
app.post("/tasks", async (req, res) => {
  //Logic to add a user
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

  try {
    const [newTask] = await knex("tasks")
      .insert({
        taskName,
        taskDetail,
        idTaskAdmin,
        taskPriority,
      })
      .returning("*");

    res.status(201).send(newTask);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get All Tasks: GET /tasks
app.get("/tasks", async (req, res) => {
  // Logic to get all tasks
  try {
    const tasks = await knex("tasks").select("*");
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a Single Task: GET /tasks/:id
app.get("/tasks/:id", async (req, res) => {
  // Logic to get a single task
  try {
    const task = await knex("tasks").where("id", req.params.id).first();
    if (!task) {
      return res.status(404).send("User not found");
    }
    res.json(task);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a Task: PUT /tasks/:id
app.put("/tasks/:id", async (req, res) => {
  // Logic to update a task
  const { taskName, taskDetail, taskAdmin, taskPriority } = req.body;

  try {
    const updatedTask = await knex("tasks")
      .where("id", req.params.id)
      .update({
        taskName,
        taskDetail,
        taskAdmin,
        taskPriority,
      })
      .returning("*");

    if (!updatedTask.length) {
      return res.status(404).send("Task not found");
    }

    res.json(updatedTask[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//NEED TO KNEXIFY
// Delete a Task: DELETE /tasks/:id
app.delete("/tasks/:id", async (req, res) => {
  // Logic to delete a task
  try {
    const deleted = await knex("tasks").where("id", req.params.id).del();
    if (!deleted) {
      return res.status(404).send("Task not found");
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//JOINED Table UNDER  CONSTRUCTION ------------------------------------------------------------------------------------------------------
//NEED TO KNEXIFY
//// Joined task assignment table ////
//id, idMember, idTask, isComplete

// NEW needs testing
app.post("/assignments", async (req, res) => {
  // Logic to create new assignment
  const { idUser, idTask } = req.body;
  const isComplete = false; //new assignment not complete by defualt

  if (!idUser || !idTask) {
    return res
      .status(400)
      .send("User ID and Task ID are required to make an assignment");
  }

  // how to post to table NOT CONFIDENT in this one =>
  try {
    const [newAssignment] = await knex("member_task_assignment")
      .insert({
        idUser,
        isTask,
        isComplete,
      })
      .returning("*");

    res.status(201).send(newAssignment);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// NEW needs testing
app.put("/assignments/:id", async (req, res) => {
  //Logic to update the isComplete flag

  const { isComplete } = req.body; // only takkes in Boolean to set flag as true vs false

  try {
    const updatedAssignment = await knex("member_task_assignment")
      .where("id", req.params.id)
      .update({
        isComplete,
      })
      .returning("*");

    if (!updatedAssignment.length) {
      return res.status(404).send("Assignment not found");
    }

    res.json(updatedAssignment[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//  - research this
