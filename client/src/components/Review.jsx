import React from 'react';
import review from '../css/review.css'

const Review = (props) => {
  const { user, date, text, userImage } = props.review;
  return (
  <div>
    <div className={review.frame}>
     <img src={userImage} className={review.profilePic}/>
    </div>
    {user}<br/>
    {date}<br/>
    {text}
  </div>
  )
}

export default Review;