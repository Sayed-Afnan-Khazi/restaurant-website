const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Connect to MongoDB -------------------------------------------------------------------
const connectDB = async () => {
	try {
		mongoose.set('strictQuery', false)
		// const conn = await mongoose.connect('mongodb+srv://afnanind:WsqvZZ3r8meqNPjX@cluster0.f9a8g4i.mongodb.net/restaurant')
		const conn = await mongoose.connect('mongodb+srv://hetarthjain:MduFbAYHnoxOqbIr@cluster0.ezb8neo.mongodb.net/restaurant')
		console.log(`DB connected ${conn.connection.host}`)
	} catch (err)
	{ console.log("Error", err) }
}
connectDB();
// Models --------------------------------------------------------------------------------
const ReviewSchema = new mongoose.Schema( {
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	review: {
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

// Reviews --------------------------------------------------------------------------------
app.post('/reviews', async (req, res) => {
	try {
		const { name, email, rating, title, review} = req.body;
		console.log("req.body: ",req.body)
		const review_new = new Review({ name, email, rating, title, review});
		await review_new.save();
		res.status(200).json({ message: 'Review submitted successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Failed to submit review' });
		console.log(error);
	}
});
app.get('/reviews', async (req, res) => {
	try{
		const reviews = await Review.find();
		res.status(200).json(reviews);
	} catch (error) {
		res.status(500).json({ message: 'Failed to fetch reviews' });
	}
});
app.get('/top-reviews', async (req, res) => {
    try {
        // Sort reviews by rating in descending order and limit to 3
        const topReviews = await Review.find().sort({ rating: -1 }).limit(3);

        if (!topReviews.length) {
            return res.status(200).json({ message: 'No reviews found' });
        }

        res.status(200).json(topReviews);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch reviews' });
    }
});
// Reservations --------------------------------------------------------------------------
app.post('/reservations', async (req, res) => {
	const { name, email, date, time, people } = req.body;
	console.log("req.body: ",req.body)
    try {
		const existingReservation = await Reservation.findOne({ date, time });
		console.log("existingReservation: ",existingReservation)
        if (existingReservation) {
            return res.status(400).send({ message: 'This time slot is already booked.' });
        }

        const reservation = new Reservation({ name, email, date, time, people });
        await reservation.save();
		res.json({ message: 'Reservation successful!' }).redirect('/');
	} catch (error) {
		console.log("Error: ",error)
        res.status(500).json({ message: 'Error creating reservation' });
    }
});
app.get('/reservations', async (req, res) => {
	try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reservations' });
    }
});
app.get('/admin', async (req, res) => {
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

// Start the server -----------------------------------------------------------------------
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});