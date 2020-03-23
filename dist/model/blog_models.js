"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{
    name: String,
    contact: {
      QQ: Number,
      WeChat: Number,
      Email: String
    },
    body: String,
    date: Date.now
  }],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    favs: Number
  }
});
const Blog = mongoose.model('Blog', blogSchema);
var _default = Blog;
exports.default = _default;