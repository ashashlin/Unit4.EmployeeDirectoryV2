import express from "express";
import employeesRouter from "./routes/employees.js";

const app = express();

app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Sorry! Something went wrong!" });
});

export default app;
