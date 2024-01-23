import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const AnswerSetSchema = new Schema(
	{
		10: {
			type: Number,
			default: null,
		},
		20: {
			type: Number,
			default: null,
		},
		30: {
			type: Number,
			default: null,
		},
		40: {
			type: Number,
			default: null,
		},
		41: {
			type: Number,
			default: null,
		},
		42: {
			type: Number,
			default: null,
		},
		50: {
			type: Number,
			default: null,
		},
		51: {
			type: Number,
			default: null,
		},
		52: {
			type: Number,
			default: null,
		},
		53: {
			type: Number,
			default: null,
		},
		60: {
			type: Number,
			default: null,
		},
	},
	{ timestamps: true }
);

const AnswerSet =
	mongoose.models.AnswerSet || mongoose.model('AnswerSet', AnswerSetSchema);

export default AnswerSet;
