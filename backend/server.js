const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Rest of your code...

app.use(express.json());
// Connect to MongoDB
// mongoose.connect('mongodb+srv://hetarthjain:MduFbAYHnoxOqbIr@cluster0.ezb8neo.mongodb.net/blog', {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// })
// 	.then(() => {
// 		console.log('Connected to MongoDB');
// 	})
// 	.catch((error) => {
// 		console.error('Error connecting to MongoDB:', error);
// 	});

const connectDB = async () => {
	try {
		mongoose.set('strictQuery', false)
		const conn = await mongoose.connect('mongodb+srv://hetarthjain:MduFbAYHnoxOqbIr@cluster0.ezb8neo.mongodb.net/restaurant')
		console.log(`DB connected ${conn.connection.host}`)
	} catch (err)
	{ console.log("Error", err) }
}
connectDB();

const ReviewSchema = new mongoose.Schema( {
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	reviewer_name: {
		type: String,
		required: true
	}
 });
const Review = mongoose.model('Review', ReviewSchema);

const ReservationsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	people: {
		type: Number,
		required: true
	}
});
const Reservation = mongoose.model('Reservation', ReservationsSchema);


app.post('/review', async (req, res) => {
	try{
	const { title, body, rating, reviewer_name } = req.body;
	await Review.create({ title, body, rating, reviewer_name });
		res.status(200).json({ message: 'Review submitted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Failed to submit review' });
	}
});
app.get('/review', async (req, res) => {
	try{
		const reviews = await Review.find();
		res.status(200).json(reviews);
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch reviews' });
	}
});
app.post('/reservations', async (req, res) => {
	const reservation = new Reservation(req.body);
	try {
	  await reservation.save();
	  res.status(201).send(reservation);
	} catch (error) {
	  res.status(400).send(error);
	}
});
app.get('/reservations', async (req, res) => {
	try {
	  const reservations = await Reservation.find();
	  res.status(200).send(reservations);
	} catch (error) {
	  res.status(500).send(error);
	}
});
app.get('/reservations', async (req, res) => {
	try {
	  const reservations = await Reservation.find();
	  res.status(200).send(reservations);
	} catch (error) {
	  res.status(500).send(error);
	}
});
app.delete('/reservations/:id', async (req, res) => {
	try {
	  const reservation = await Reservation.findByIdAndDelete(req.params.id);
  
	  if (!reservation) {
		res.status(404).send();
	  }
  
	  res.send(reservation);
	} catch (error) {
	  res.status(500).send(error);
	}
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});