import React from 'react';
import styles from '../css/paginate.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { getReviews } = this.props;
    let currentPage = Number(event.target.id);
    this.setState({
      currentPage 
    }, () => {
      getReviews(currentPage)
        .then(() => {
          document.getElementById('reviewList').scrollIntoView({
            behavior: 'smooth'
          });
        })
    });
  }

  render() {
    const pageNumbers = [];
    for (let i = 1; i <= this.props.pageCount; i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className={number === this.state.currentPage ? `${styles.li} ${styles.currentPage}` : styles.li}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul className={styles.ul}>
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default Pagination;