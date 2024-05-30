import React from "react";

const LeaveAReview = () => {

	const [message, setMessage] = React.useState('');

	const handleForm = (event) => {
		event.preventDefault();

		const name = event.target.name.value;
		const email = event.target.email.value;
		const rating = event.target.rating.value;
		const review = event.target.review.value;

		const formData = {
			name,
			email,
			rating,
			review
		};

		fetch('http://localhost:5000/leave-a-review', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
		.then(response => response.json())
		.then(data => {
			setMessage(data.message);
		})
		.catch(error => {
			setMessage('An error occurred. Please try again later.');
		});
	}
    return (
        <div style={{ background: "linear-gradient(#090909, #161616,#090909)", height:'100vh' }}>
            <section class="page-top" id="top">
				<h1 class="page-heading">Leave a Review</h1>
				<p class="page-details">Tell us what you think! We value your feedback.</p>
				{message && <p class="page-details">{message}</p>}
				<form onSubmit={handleForm}>
					<label for="name">Name:</label>
					<input type="text" id="name" name="name"></input>
					<label for="email">Email:</label>
					<input type="email" id="email" name="email"></input>
					<label for="rating">Rating:</label>
					<input type="number" id="rating" name="rating" min="0" max="5" step="0.5"></input>
					<label for="review">Review:</label>
					<textarea id="review" name="review"></textarea>
					<input type="submit" value="Submit"></input>
				</form>
            </section>
        </div>
    );
}

export default LeaveAReview;