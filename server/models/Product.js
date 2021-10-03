const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
	productName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
		min: 0.99,
	},
	count: {
		type: Number,
		min: 0,
		default: 0,
	},
	image: {
		type: String,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
