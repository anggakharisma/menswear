const mongoose = require('mongoose');
const Stock = require('./Stock');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    slug: String,
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: '' }
});

CategorySchema.pre('save', function(next) {
    this.slug = convertToSlug(this.name);
    next();
});

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
module.exports = mongoose.model('Category', CategorySchema);