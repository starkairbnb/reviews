import React from 'react';
import rating from '../css/rating.css';

const Rating = (props) => {
  let starArr = [];
  for (let i = 0; i < 5; i++) {
    let diff = props.rating - i;
    let starDiv = [];
    switch (true) {
      case diff >= 1:
        starDiv.push(<img className={rating.fullStar} src="/images/fullStar.png" key={i.toString()}/>)
        break;
      case diff === 0.5:
        starDiv.push(<img className={rating.halfStar} src="/images/halfStar.png" key={"half" + i.toString()}/>)
      case diff < 1:
        starDiv.push(<img className={rating.emptyStar} src="/images/emptyStar.png" key={i.toString()}/>)
        break;
    }
    starDiv = <div key={"div" + i}>{starDiv}</div>;
    starArr.push(starDiv)
  }

  return (
  <span className={rating.category}>
    <div className={rating.column}>{props.id}</div>
    <div className={`${rating.column} ${rating.starArr}`}>{starArr}</div>
  </span>
  )
}

export default Rating;