import React from 'react';
import Star from './Star.jsx';
import rating from './rating.css';

const Rating = (props) => {
  let starArr = [];
  for (let i = 0; i < 5; i++) {
    let diff = props.rating - i;
    switch (true) {
      case diff > 1:
        starArr.push(<img className={rating.fullStar} src="/images/fullStar.png"/>)
        break;
      case diff < 1:
        starArr.push(<img className={rating.emptyStar} src="/images/emptyStar.png"/>)
      case diff === 0.5:
        starArr.push(<img className={rating.halfStar} src="/images/halfStar.png"/>)
        break;
        
    }
  }
  console.log(starArr)
  return (
  <span>
    {/* <img className={rating.fullStar} src="/images/fullStar.png"/>
    <img className={rating.emptyStar} src="/images/emptyStar.png"/>
    <img className={rating.halfStar} src="/images/halfStar.png"/> */}
    {starArr}
  </span>
  )
}

export default Rating;