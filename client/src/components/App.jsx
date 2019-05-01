import React from 'react';
import RatingList from './RatingList.jsx';
import ReviewList from './ReviewList.jsx';
import app from '../css/app.css';
import axios from 'axios';

class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      reviewCount: 0,
      reviews: []
    }
    this.getRatings = this.getRatings.bind(this);
    this.getReviewCount = this.getReviewCount.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount () {
    // this.getRatings()
    //   .then(this.getReviewCount)
    //   .then(() => {
    //     this.getReviews(1);
    //   })
  }

  getRatings () {
    return axios.get('/api/rating')
      .then((res) => {
        this.setState({ ratings: res.data});
      }, console.log(this.state.ratings))
  }

  getReviewCount () {
    return axios.get('/api/reviews')
    .then((res) => {
      this.setState({ reviewCount: res.data.count });
    })
  }

  getReviews (propertyid) {
    return axios.get(`/api/reviews/${propertyid}`)
    .then((res) => {
      this.setState({ reviews: res.data })
    }, console.log(this.state.reviews))
  }

  render () {
  return (
  <section className={app.body}>
    <RatingList ratings={this.state.ratings} count={this.state.reviewCount}/>
    <div className={app.ratingReviewBorder}>
      <div className={app.borderLine}/>
    </div>
    <ReviewList count={this.state.reviewCount} reviews={this.state.reviews} getReviews={this.getReviews}/>
  </section>
  )
}
}

export default App;