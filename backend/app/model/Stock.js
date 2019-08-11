const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    name: String,
    value: Schema.Types.Mixed,
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    created_at: { type: Date },
    updated_at: { type: Date }
});
module.exports = mongoose.model('Stock', StockSchema);