import express from "express";
import cars from "./carRoutes.js";
import manufactore from "./manufactureRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Node rodando"));

  app.use(express.json(), cars, manufactore);
};

export default routes;
