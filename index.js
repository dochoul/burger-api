// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// // const router = jsonServer.router("db.json");
// // const router = jsonServer.router("posts.json

// const router = jsonServer.router();

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "index" });
// });

// router.get("/posts", function (req, res, next) {
//   res.render("index", { title: "posts" });
// });

// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, Express");
});

router.get("/burger", (req, res) => {
  res.send("burger");
});

module.exports = router;
