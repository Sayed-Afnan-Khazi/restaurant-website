import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../reviewcard/ReviewCard";

const Reviews = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "The best restaurant in Mysore!",
      body: "The best restaurant in Mysore! The food is delicious and the service is excellent. I would highly recommend this restaurant to anyone looking for a great dining experience.",
      reviewer_name: "John Applebees",
      rating: "5/5",
    },
    {
      title: "Exquisite!",
      body: "A great time. Fabulous staff, amazing food. A must go-to if you're in Mysore.",
      reviewer_name: "Tim Cook",
      rating: "5/5",
    },
    {
      title: "Great food!",
      body: "The food was amazing and the service was great. I would definitely recommend this restaurant to anyone looking for a great dining experience.",
      reviewer_name: "Elon Musk",
      rating: "5/5",
    },
  ];
  return (
    <section className="reviews">
      <h1 className="section-heading">What Our Customers Say</h1>
      <div className="reviews-container">
        {data.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
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