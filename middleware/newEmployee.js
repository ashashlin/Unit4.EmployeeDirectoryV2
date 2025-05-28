export default function newEmployee(req, res, next) {
  const name = req.body?.name;

  if (!name) {
    return res.status(400).send("Please provide a name for the new employee.");
  } else {
    res.status(201);
    next();
  }
}
