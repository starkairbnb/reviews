import React from 'react';
import rating from '../css/rating.css';

const Rating = (props) => {
  let starArr = [];
  for (let i = 0; i < 5; i++) {
    let diff = props.rating - i;
    switch (true) {
      case diff >= 1:
        starArr.push(<img className={rating.fullStar} src="/images/fullStar.png" key={i.toString()}/>)
        break;
      case diff === 0.5:
        starArr.push(<img className={rating.halfStar} src="/images/halfStar.png" key={"half" + i.toString()}/>)
      case diff < 1:
        starArr.push(<img className={rating.emptyStar} src="/images/emptyStar.png" key={i.toString()}/>)
        break;
    }
  }

  return (
  <span className={rating.category}>
    <div className={rating.column}>{props.id}</div>
    <div className={rating.column}>{starArr}</div>
  </span>
  )
}

export default Rating;