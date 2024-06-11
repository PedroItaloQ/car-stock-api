import express from "express";
import CarController from "../controllers/carController.js";

const routes = express.Router();

routes.get("/cars", CarController.listarCar);
routes.get("/cars/busca", CarController.listarCarsPorContrutora);
routes.get("/cars/:id", CarController.listarCarPorId);
routes.post("/cars", CarController.cadastrarCar);
routes.put("/cars/:id", CarController.atualizarCar);
routes.delete("/cars/:id", CarController.excluirCar);

export default routes;
