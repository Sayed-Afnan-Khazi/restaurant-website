import React, { useState, useEffect } from "react";

const AdminReservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch('https://le-fish-au-chocolat.onrender.com/admin')
            .then(response => response.json())
            .then(data => {
                const formattedReservations = data.map(reservation => ({
                    ...reservation,
                    date: formatDate(reservation.date)
                }));
                setReservations(formattedReservations);
            })
            .catch(error => console.error('Error fetching reservations:', error));
	}, []);
	
	const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div style={{ background: "linear-gradient(#090909, #161616,#090909)", height: '100vh' }}>
            <section className="page-top" id="top">
                <h1 className="page-heading">Admin Reservations</h1>
                <p className="page-details">All reservations</p>
                <table className="reservations-table">
                    <thead>
						<tr>
							<th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>People</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation, index) => (
                            <tr key={index}>
                                <td>{reservation.name}</td>
                                <td>{reservation.email}</td>
                                <td>{reservation.date}</td>
                                <td>{reservation.time}</td>
                                <td>{reservation.people}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default AdminReservations;
