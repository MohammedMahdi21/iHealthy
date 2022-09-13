import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: new Date()
  }
})

const RecipeMessage = mongoose.model('RecipeMessage', recipeSchema);

export default RecipeMessage;