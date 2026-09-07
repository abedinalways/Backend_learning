const user = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  }
]
const getUsers = (req, res) => {
  res.json({
    message: "users found successfully",
    data: user
  })
};

const getUserById = (req, res) => {
  const userId = Number(req.params.id);
  const user = user.find((item) => item.id === userId);
  if (!user) {
    return res.status(404).json({
      message: "user not found"
    })
  }
  res.json({
    message: "user found successfully",
    data: user
  })
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      message: "name and email are required"
    })
  }
}