import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../reviewcard/ReviewCard";

const Reviews = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [reviews, setReviews] = useState([])

  useEffect(()=> {
    fetch('http://localhost:5000/top-reviews', {
			method: 'GET',
		})
		.then(response => response.json())
		.then(data => {
      console.log(data)
			setReviews(data);
		})
		.catch(error => {
			setMessage('An error occurred. Please try again later.');
		});
  },[])

  // const data = [
  //   {
  //     title: "The best restaurant in Mysore!",
  //     body: "The best restaurant in Mysore! The food is delicious and the service is excellent. I would highly recommend this restaurant to anyone looking for a great dining experience.",
  //     reviewer_name: "John Applebees",
  //     rating: "5/5",
  //   },
  //   {
  //     title: "Exquisite!",
  //     body: "A great time. Fabulous staff, amazing food. A must go-to if you're in Mysore.",
  //     reviewer_name: "Tim Cook",
  //     rating: "5/5",
  //   },
  //   {
  //     title: "Great food!",
  //     body: "The food was amazing and the service was great. I would definitely recommend this restaurant to anyone looking for a great dining experience.",
  //     reviewer_name: "Elon Musk",
  //     rating: "5/5",
  //   },
  // ];
  return (
    <section className="reviews">
      <h1 className="section-heading">What Our Customers Say</h1>
      <div className="reviews-container">
        {reviews ? reviews.map((review, index) => (
          <ReviewCard key={index} title={review.title} body={review.review} reviewer_name={review.name} rating={`${review.rating}/5`}/>
        )): <p>There are no reviews yet. Be the first to leave a review!</p>}
      </div>
      <p
        className="rounded-btn leave-a-review"
        onClick={() => navigate("/leave-a-review")}
      >
        Leave a Review
      </p>
    </section>
  );
};

export default Reviews;
