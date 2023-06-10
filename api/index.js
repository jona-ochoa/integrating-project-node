const server = require("./src/app");
const { conn } = require("./src/db");

const PORT = 3001;

server.listen(PORT, () => {
  conn.sync({ force: false }); // una vez terminado settear en false para realizar pruebas
  console.log(`Server is running on port ${PORT}`);
});
