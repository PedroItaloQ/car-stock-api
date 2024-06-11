import express from "express";
import ManufactureController from "../controllers/manufactoreController.js";

const routes = express.Router();

routes.get("/manufactore", ManufactureController.listarManufactores);
routes.get("/manufactore/:id", ManufactureController.listarManufactorePorId);
routes.post("/manufactore", ManufactureController.cadastrarManufactore);
routes.put("/manufactore/:id", ManufactureController.atualizarManufactore);
routes.delete("/manufactore/:id", ManufactureController.excluirManufactore);

export default routes;
