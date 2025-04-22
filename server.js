const express = require("express"); // Import Express
const app = express(); // Create an Express application

// Define a GET route at "/"
app.get("/", (req, res) => {
  res.send("Hello, Express!"); // Send a response to the client
});

const PORT = 3000; // Define the port number
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Start the server
});
