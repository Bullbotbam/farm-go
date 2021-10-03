const mongoose = require('mongoose');
const { Schema } = mongoose;
const Order = require('./Order');
const bcrypt = require('bcrypt');

const customerSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: String,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	orders: [Order.schema],
});

customerSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}
	next();
});

customerSchema.methoda.isCorrectPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
