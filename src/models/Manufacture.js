import mongoose from "mongoose";

const manufactoreSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  nacionalidade: { type: String }
}, { versionKey: false });

const manufactore = mongoose.model("Construtoras", manufactoreSchema);

export { manufactore, manufactoreSchema };
