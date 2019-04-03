import React from 'react';
import review from '../css/review.css'

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      long: false,
      expanded: false,
      text1: '',
    }
    this.expandText = this.expandText.bind(this)
  }

  componentDidMount() {
    const { text } = this.props.review;
    console.log(text.length)
    if (text.length > 270 && text.substring(270).indexOf(' ') !== -1) {
      let space = 270 + text.substring(270).indexOf(' ');
      let text1 = text.substring(0, space);
      this.setState({ text1, long: true })
    }
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
  <div>
    <div className={review.frame}>
     <img src={userImage} className={review.profilePic}/>
    </div>
    {user}<br/>
    {date}<br/>
    {/* {text} */}
    {long ? (expanded ? <div>{text}</div> : <div>{text1 + '...'}<button type='button' className={review.readMore} onClick={this.expandText}>Read More</button></div>) : <div>{text}</div>}
  </div>
  )
  }
}

export default Review;