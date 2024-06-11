import mongoose from "mongoose";
import {  manufactoreSchema } from "./Manufacture.js";

const carSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  construtora: { type: String },
  preco: { type: Number },
  kmRodados: { type: Number },
  manufactore: manufactoreSchema
}, { versionKey: false });

const car = mongoose.model("cars", carSchema);

export default car;
