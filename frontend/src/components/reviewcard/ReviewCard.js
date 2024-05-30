import React from "react";

const ReviewCard = ({ title, body, rating, reviewer_name}) => {
	return (
		<div className="review">
			<h3>{ title }</h3>
		<p>
				{ body }
		</p>
			<p>{ rating } - { reviewer_name }</p>
	  </div>
	)
}

export default ReviewCard;