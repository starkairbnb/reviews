import React from 'react';
// import Star from './Star.jsx';
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
  // console.log(props.rating)
  return (
  <span>
    <div >{props.id}</div><div>{starArr}</div>
  </span>
  )
}

export default Rating;