import React from "react";
import "../../styles/Reviews.css";
import { usersReviews } from "./UsersReview";
import Card from "./Card";
import { IusersReviews } from "../../interface/UserReviewsInterface";

const Reviews = () => {
  return (
    <div className="Reviews">
      <div className="container">
        <h1 className="Reviews_h1">Reviews</h1>
      </div>

      <div className="Reviews_slide_parent">
       <div className="Reviews_scroll">
       {usersReviews.map((review: IusersReviews) => {
          return <Card key={review.id} review={review} />
        })}
       </div>
      </div>
    </div>
  );
};

export default Reviews;
