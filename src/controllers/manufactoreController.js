import { manufactore } from "../models/Manufacture.js";

class ManufactureController {

  static async listarManufactores (req, res) {
    try {
      const listaManufactore = await manufactore.find({});
      res.status(200).json(listaManufactore);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarManufactorePorId (req, res) {
    try {
      const id = req.params.id;
      const manufactoreEncontrado = await autor.findById(id);
      res.status(200).json(manufactoreEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
    }
  };

  static async cadastrarManufactore (req, res) {
    try {
      const novoManufactore = await manufactore.create(req.body);
      res.status(201).json({ message: "criado com sucesso", manufactore: novoManufactore });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar Contrutora` });
    }
  }

  static async atualizarManufactore (req, res) {
    try {
      const id = req.params.id;
      await manufactore.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Contrutora atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirManufactore (req, res) {
    try {
      const id = req.params.id;
      await manufactore.findByIdAndDelete(id);
      res.status(200).json({ message: "Contrutora excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };
};

export default ManufactureController;
