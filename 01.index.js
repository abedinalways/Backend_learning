const express =require('express');
const app=express();
const PORT = 4000;

//client pathano json body parse korar jonno
app.use(express.json());
const users = [
  {
    id: 1, name: 'shahin', email: 'nion.sk5067@gmail.com'
  }
];
//get all users
app.get('/users', (req, res) => {
  res.json({
    message: "users fatched successfully",
    data: users,
  })
});
// get single user
app.get('/users/:id', (req, res) => {
  const userId = Number(req.params.id)
  const user = users.find((item) => item.id === userId);
  if (!user) {
    return res.status(404).json({
      message: "user not found"
    })
  }
  res.json({
    message: "user found successfully",
    data: user
  })
})

// app.get('/', (req, res)=>{
//  res.json({
//   message:"learning API"
//  })
// });

//post method
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({
      message: "name and email are required"
    })
  }
  const newUser = {
    id: users.length + 1, name, email
  };
  users.push(newUser);
  res.status(201).json({
    message: "user created successfully",
    data: newUser
  });

})

//patch method
app.patch("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const { name, email } = req.body;
  const user = users.find((item) => item.id === userId);
  if (!user) {
    return res.status(404).json({
      message: "user not found"
    })
  }
  if(!name && !email){
    return res.status(400).json({
      message: "name or email is required"
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
  })
});
//delete method
app.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const userIndex = users.findIndex((item) => item.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({
      message: "user not found"
    })
  }
  users.splice(userIndex, 1);
  res.json({
    message: "user deleted successfully"
  })
});

app.listen(PORT, ()=>{
  console.log(`server is running on the port ${PORT}`)
})