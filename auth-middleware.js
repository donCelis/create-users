import jsonServer from "json-server";
import auth from "json-server-auth";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.db = router.db;

// Middlewares
server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});
