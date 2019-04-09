import React from 'react';
import styles from '../css/paginate.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleNumberClick(event) {
    const { getReviews } = this.props;
    console.log(event.target.id)
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

  handleArrowClick(event) {
    const { getReviews } = this.props;
    const { currentPage } = this.state;
    let page = currentPage;
    let dir = event.target.id;
    console.log(event.target.id)
    if (dir === '<') {
      page--;
    } else if (dir === '>') {
      page++;
    }
    this.setState({
      currentPage: page
    }, () => {
      getReviews(page)
        .then(() => {
          document.getElementById('reviewList').scrollIntoView({
            behavior: 'smooth'
          });
        })
    });
  }

  renderPageNumber(number) {
    return (
      <li
        className={styles.li}
        key={number}
        id={number}
        
      >
        <button className={styles.button} id={number} onClick={number === this.state.currentPage ? undefined : this.handleNumberClick}>
          <div className={number === this.state.currentPage ? `${styles.text} ${styles.currentPage}` : styles.text} id={number}>
            {number}
          </div>
        </button>
      </li>
    );
  }

  renderArrow(str) {
    let key = str === '<' ? 0 : this.props.pageCount + 1;
    return (
      <li
        className={styles.li}
        key={key}
        id={str}
        
      >
      <button className={styles.button} id={str} onClick={this.handleArrowClick}>
        <div className={`${styles.text} ${styles.arrow}`} id={str}>
          {str}
        </div>
      </button>
      </li>
    );
  }

  render() {
    const { pageCount } = this.props;
    const { currentPage } = this.state;
    const pageNumbers = [];


    if (pageCount <= 4) { //if pages are less than or equal to 4, render every page number
      for (let page = 1; page <= pageCount; page++) {
        pageNumbers.push(this.renderPageNumber(page));
      }
    } else {
      let leftSide = 1;
      let rightSide = 1;

      /*If currentPage is at the beginning or end of the pagination,
      change boundaries to display endpoints properly*/
      if (currentPage > pageCount - 1) {
        rightSide = pageCount - currentPage;
        leftSide = 2 - rightSide;
      } else if (currentPage < 2) {
        leftSide = currentPage - 1;
        rightSide = 2 - leftSide;
      }

      let index;
      let page;
      let breakView;
      let createPageView = page => this.renderPageNumber(page);

      for (page = 1; page <= pageCount; page++) {

        //display left margin
        if (page <= 1) {
          pageNumbers.push(createPageView(page));
          continue;
        }

        //display right margin
        if (page >= pageCount) {
          pageNumbers.push(createPageView(page));
          continue;
        }

        //display range of numbers around current page
        if (page >= currentPage - leftSide && page <= currentPage + rightSide) {
          pageNumbers.push(createPageView(page));
          continue;
        }

        if ((page === 2 || page === pageCount - 1) && Math.abs(currentPage - page) === 2) {
          pageNumbers.push(createPageView(page));
          continue;
        }
        
        //break if no conditions are fulfilled
        if (pageNumbers[pageNumbers.length - 1] !== breakView) {
          breakView = (
            <li
            className={styles.li}
            key={page}
            id={page}
            >
              <div className={styles.break}>
                {'...'}
              </div>
            </li>
          );
          pageNumbers.push(breakView);
        }
      }
    }

    //add navigation arrows
    if (currentPage !== 1) {
      pageNumbers.unshift(this.renderArrow('<'));
    }
    if (currentPage !== pageCount) {
      pageNumbers.push(this.renderArrow('>'));
    }

    return (
      <div className={styles.pagination}>
        <ul className={styles.ul}>
          {pageNumbers}
        </ul>
      </div>
    );
  }
}

export default Pagination;