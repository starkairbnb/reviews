import React from 'react';
import Review from './Review.jsx';
// import ReactPaginate from 'react-paginate';
// import paginate from '../css/paginate.css';
import Pagination from './Pagination.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  render() { 
    console.log(this.props)
    return (
    <div id='reviewList'>
      <div>
        {this.props.reviews.map((review, index) => {
          return <Review key={index} review={review} />
        })}
      </div>
      <div>
        <Pagination pageCount={Math.ceil(this.props.count/7)} getReviews={this.props.getReviews}/>
      </div>
    </div>
  )
  }
} 

export default ReviewList;