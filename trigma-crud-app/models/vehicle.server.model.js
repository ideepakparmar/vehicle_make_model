import mongoose from 'mongoose';
const Schema = mongoose.Schema({
	createdAt: {
		type: Date,
		default: Date.now,
	},
	year: Number,
	make: String,
	model: String,
});
export default mongoose.model('Vehicle', Schema);
