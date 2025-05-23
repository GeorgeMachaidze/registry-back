export const getAllUsers = async (req, res) => {
  const users = [
    {
      id: 1,
      name: "Alice",
      surname: "Wonderland",
      email: "alice@example.com",
    },
    {
      id: 2,
      name: "Bob",
      surname: "Boboshidze",
      email: "bob@example.com",
    },
    {
      id: 3,
      name: "Charlie",
      surname: "Leclerrrrr",
      email: "charlie@example.com",
    },
  ];

  return res.json(users);
};
export const createUser = async (req, res) => {
  try {
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {}
};
