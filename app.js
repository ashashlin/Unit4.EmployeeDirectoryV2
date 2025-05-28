import express from "express";
import employeesRouter from "./routes/employees.js";

const app = express();

app.use(express.json());
app.use("/employees", employeesRouter);

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

export default app;
