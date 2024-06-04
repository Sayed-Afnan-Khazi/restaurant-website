import React, { useState, useEffect } from "react";

const TableReservation = () => {
    const [reservations, setReservations] = useState([]);
    const [message, setMessage] = useState('');
    const [form, setForm] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        people: ''
    });

    useEffect(() => {
        fetch('http://localhost:5000/reservations')
            .then(response => response.json())
            .then(data => setReservations(data))
            .catch(error => console.error('Error fetching reservations:', error));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const isTimeWithinWorkingHours = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours >= 7 && (hours < 23 || (hours === 23 && minutes === 0)); // 11:00 PM should be the last valid time
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const now = new Date();
        const selectedDate = new Date(`${form.date}T${form.time}`);

        if (selectedDate < now) {
            setMessage('You cannot book a table for a past date or time.');
            return;
        }

        if (!isTimeWithinWorkingHours(form.time)) {
            setMessage('Please select a time within working hours (7 AM to 11 PM).');
            return;
        }

        const existingReservation = reservations.find(reservation => 
            reservation.date === form.date && reservation.time === form.time
        );

        if (existingReservation) {
            setMessage('This time slot is already booked. Please choose another time.');
            return;
        }

        fetch('http://localhost:5000/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data.message);
            setReservations([...reservations, form]);
        })
        .catch(error => {
            setMessage('An error occurred. Please try again later.');
        });
    };

    const isTimeAvailable = (date, time) => {
        const now = new Date();
        const selectedDate = new Date(`${date}T${time}`);

        if (selectedDate < now) {
            return false;
        }

        if (!isTimeWithinWorkingHours(time)) {
            return false;
        }

        return !reservations.some(reservation => reservation.date === date && reservation.time === time);
    };

    return (
        <div style={{ background: "linear-gradient(#090909, #161616,#090909)", height: '100vh' }}>
            <section className="page-top" id="top">
                <h1 className="page-heading">Table Reservation</h1>
                <p className="page-details">Reserve your table with us!</p>
                {message && <p className="page-details">{message}</p>}
                <form className = 'reserveform' onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleInputChange} required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleInputChange} required />
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={form.date} onChange={handleInputChange} required />
                    <label htmlFor="time">Time:</label>
                    <input type="time" id="time" name="time" value={form.time} onChange={handleInputChange} required />
                    <label htmlFor="people">Number of People:</label>
                    <input type="number" id="people" name="people" value={form.people} onChange={handleInputChange} min="1" required />
                    <input type="submit" className="rounded-btn" value="Submit" disabled={!isTimeAvailable(form.date, form.time)} />
                </form>
            </section>
        </div>
    );
};

export default TableReservation;
