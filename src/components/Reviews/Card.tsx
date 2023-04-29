import React from "react";
import "./Card.css";
import { IusersReviews } from "../../interface/UserReviewsInterface";

type props = {
    review: IusersReviews
}

const Card = ({ review }: props) => {
  return (
    <div className="Cards_card">
      <div className="Cards_content">
        <div className="Cards_front">
          <p className="Cards_subtitle">{review.id}</p>
          <h3 className="Cards_title">{review.username}</h3>
        </div>

        <div className="Cards_back">
          <p className="Cards_description">
           {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
