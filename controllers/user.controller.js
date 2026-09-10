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
    data: user,
  });
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
    });
  }
  const newUser = {
    id: user.length + 1,
    name,
    email,
  };
  users.push(newUser);

  res.status(201).json({
    message: 'user created successfully',
    data: newUser,
  });
}

const updateUser = (req, res) => {
  const userId = Number(req.params.id);
  const { name, email } = req.body;
  const user = users.find((item) => item.id === userId);
  if (!user) {
    return res.status(404).json({
      message: "user not found"
    })
  }
  if (!name || !email) {
    return res.status(400).json({
      message: "name and email are required"
    })
  }
  if (name) {
    user.name = name;
  }
  if (email) {
    user.email = email;

  }
  res.json({
    message: "user updated successfully",
    data: user
  });
}

const deleteUser = (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex(item => item.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  const [deletedUser] = users.splice(userIndex, 1);

  res.json({
    message: 'User deleted successfully',
    data: deletedUser,
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
