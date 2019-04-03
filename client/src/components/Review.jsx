import React from 'react';
import review from '../css/review.css'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      long: false,
      hovered: false,
      expanded: false,
      text1: '',
    }
    this.expandText = this.expandText.bind(this);
    this.readMoreHover = this.readMoreHover.bind(this);
  }

  componentDidMount() {
    const { text } = this.props.review;
    if (text.length > 270 && text.substring(270).indexOf(' ') !== -1) {
      let space = 270 + text.substring(270).indexOf(' ');
      let text1 = text.substring(0, space);
      this.setState({ text1, long: true })
    }
  }

  readMoreHover() {
    this.setState( { hovered: !this.state.hovered } )
  }

  expandText() {
    this.setState( { expanded: true } );
  }

  render() {
  const { user, date, text, userImage } = this.props.review;
  const { long, expanded, text1 } = this.state;
  // let text1 = text;
  // let text2;
  // if (this.state.long) {
  //   let space = 270 + text.substring(270).indexOf(' ');
  //   text1 = text.substring(0, space) + '...';
  //   text2 = text.substring(space);
  // }
    return (
      <div className={review.review}>
        <div>
          <img src={userImage} className={review.profilePic} />
          <div className={review.postDetail}>
            <div >
              {user}<br />
            </div>
            <div >
              {date}<br />
            </div>
          </div>
        </div>
        {long ? (expanded ?
          <div>
            {text}
          </div> :
          <div>
            {text1 + '...'}
            <button type='button' className={this.state.hovered ? review.readMoreHover : review.readMore} onMouseEnter={this.readMoreHover} onMouseLeave={this.readMoreHover} onClick={this.expandText}>
              Read More
            </button>
          </div>) :
          <div>
            {text}
          </div>}
      </div>
    )
  }
}

export default Review;