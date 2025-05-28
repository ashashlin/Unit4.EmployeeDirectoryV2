import express from "express";
import employees from "#db/employees";
import newEmployee from "#middleware/newEmployee";

const employeesRouter = express.Router();

employeesRouter.get("/", (req, res) => {
  res.send(employees);
});

employeesRouter.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});

employeesRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number before we can use it to find the employee
  const employee = employees.find((e) => e.id === +id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});

employeesRouter.post("/", newEmployee, (req, res) => {
  const currentId = employees.length;
  const name = req.body.name;
  const newEmployee = { id: currentId + 1, name };
  employees.push(newEmployee);

  res.status(200).send(`New employee ${name} is successfully added.`);
});

export default employeesRouter;
