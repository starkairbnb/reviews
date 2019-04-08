import React from 'react';
import overallSearch from '../css/overallSearch.css';

class OverallSearch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render () {
    let starArr = [];
    for (let i = 0; i < 5; i++) {
      let diff = this.props.average - i;
      let starDiv = [];
      switch (true) {
        case diff >= 1:
          starDiv.push(<img className={overallSearch.fullStar} src="/images/fullStar.png" key={i.toString()} />)
          break;
        case diff === 0.5:
          starDiv.push(<img className={overallSearch.halfStar} src="/images/halfStar.png" key={"half" + i.toString()} />)
        case diff < 1:
          starDiv.push(<img className={overallSearch.emptyStar} src="/images/emptyStar.png" key={i.toString()} />)
          break;
      }
      starDiv = <div key={"div" + i}>{starDiv}</div>;
      starArr.push(starDiv)
    }

    return (
      <div className={overallSearch.overallSearch}>
        <div className={overallSearch.header}>
          <h2 className={overallSearch.reviewCount}>
            {this.props.count} Reviews
          </h2>
          <span className={overallSearch.starArr}>
            {starArr}
          </span>
        </div>
        <div className={overallSearch.searchBox}>
          <img className={overallSearch.searchIcon} src="/images/search.png"/>
          <input className={overallSearch.searchInput} type='text' placeholder="Search Reviews" onSubmit={(e) => {e.target.preventDefault()}}/>
        </div>
      </div>
      
    )

  }
}

export default OverallSearch;