const mongoose = require('mongoose');
const Stock = require('./Stock');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    image_url: String,
    slug: String,
    price: Number,
    stock: { type: Schema.Types.ObjectId, ref: 'Stock'},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: '' }
});

ProductSchema.pre('save', function(next) {
    this.slug = convertToSlug(this.name);
    next();
});

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

ProductSchema.pre("remove", function(next) {
    Stock.remove({product: this._id}).exec();
    next();
});

module.exports = mongoose.model('Product', ProductSchema);