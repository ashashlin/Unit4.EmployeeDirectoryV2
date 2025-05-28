export default function newEmployee(req, res, next) {
  const requestBody = req.body;
  const name = req.body?.name;

  if (!requestBody) {
    return res.status(400).json({ message: "Please provide a request body." });
  } else if (!name) {
    return res.status(400).json({
      message:
        "Please provide a name for the new employee in the request body.",
    });
  } else {
    next();
  }
}
