const jsonServer = require("json-server");
const path = require("path");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "Data", "db.json")); // Correct folder name
const middleware = jsonServer.defaults();

server.use(cors());
server.use(middleware);
server.use(router);

const PORT = process.env.PORT || 3000; // Use dynamic port for Render deployment
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
