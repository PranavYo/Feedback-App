const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  image: String,
  name: String,
  username: String,
});

const commentSchema = new mongoose.Schema({
  id: Number,
  content: String,
  user: userSchema,
  replyingTo: String, // For replies
});

const productRequestSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [commentSchema],
});

const currentUserSchema = new mongoose.Schema({
  image: String,
  name: String,
  username: String,
});

const ProductRequest = mongoose.model('ProductRequest', productRequestSchema);

module.exports = {
  ProductRequest,
  currentUserSchema,
};
