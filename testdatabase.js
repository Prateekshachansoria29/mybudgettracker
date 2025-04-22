const sequelize = require("./config/database");
const Transaction = require("./model");

async function testConnection() {
  try {
    console.log(" Testing database connection...");
    await sequelize.authenticate();
    console.log(" Successfully connected to the database!");

    // Sync database (creates table if not exists)
    await sequelize.sync({ alter: true }); // Change to `force: true` to drop & recreate tables

    // Check existing tables
    const [results] = await sequelize.query(
      "SELECT name FROM sqlite_master WHERE type='table';"
    );
    console.log(" Existing Tables:", results.map(row => row.name));

  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
