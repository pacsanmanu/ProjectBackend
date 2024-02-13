import mongoose from 'mongoose';

const moveSchema = new mongoose.Schema({
  PP: { type: Number, required: true },
  power: { type: Number, required: true },
  type: { type: String, required: true }
});

export default mongoose.model('Move', moveSchema);