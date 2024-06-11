import car from "../models/Car.js";
import { manufactore } from "../models/Manufacture.js";

class CarController {

  static async listarCar (req, res) {
    try {
      const listaCar = await car.find({});
      res.status(200).json(listaCar);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarCarPorId (req, res) {
    try {
      const id = req.params.id;
      const carEncontrado = await car.findById(id);
      res.status(200).json(carEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  };

  static async cadastrarCar (req, res) {
    const novoCar = req.body;
    try {
      const manufactoreEncontrado = await manufactore.findById(novoCar.manufactore);
      const carCompleto = { ...novoCar, manufactore: { ...manufactoreEncontrado._doc }};
      const carCriado = await car.create(carCompleto);
      res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }

  static async atualizarCar (req, res) {
    try {
      const id = req.params.id;
      await car.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "carro atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirCar (req, res) {
    try {
      const id = req.params.id;
      await car.findByIdAndDelete(id);
      res.status(200).json({ message: "carro excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };

 
  
};

export default CarController;
