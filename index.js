const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();
const PORT = 4000;

// Middleware to parse JSON bodies
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "learning API",
  });
});

// Use user routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});