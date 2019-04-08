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
      reviewCount: 4,
      reviews: [
        {
          user: 'Linda', 
          date: 'October 2016', 
          text: 'This was great',
          userImage: 'https://images-na.ssl-images-amazon.com/images/I/31j53xogSeL.jpg'
        },
        {
          user: 'Pete', 
          date: 'January 1032', 
          text: 'Alms for the poor',
          userImage: 'https://images-na.ssl-images-amazon.com/images/I/31j53xogSeL.jpg'
        },
        {
          user: 'Hart', 
          date: 'June 1919', 
          text: 'Thank goodness the war is over',
          userImage: 'https://images-na.ssl-images-amazon.com/images/I/31j53xogSeL.jpg'
        },
        {
          user: 'Gonrald', 
          date: 'Hernz 5172', 
          text: 'help',
          userImage: 'https://images-na.ssl-images-amazon.com/images/I/31j53xogSeL.jpg'
        },
      ]
    }
    this.getRatings = this.getRatings.bind(this);
    this.getReviewCount = this.getReviewCount.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount () {
    this.getRatings()
      .then(this.getReviewCount)
      .then(() => {
        this.getReviews(1);
      })
  }

  getRatings () {
    return axios.get('/api/rating')
      .then((res) => {
        this.setState({ ratings: res.data});
      })
  }

  getReviewCount () {
    return axios.get('/api/reviews')
    .then((res) => {
      this.setState({ reviewCount: res.data.count });
    })
  }

  getReviews (page) {
    return axios.get(`/api/reviews/${page}`)
    .then((res) => {
      this.setState({ reviews: res.data })
    })
  }

  render () {
  return (
  <section className={app.body}>
    <RatingList ratings={this.state.ratings} count={this.state.reviewCount}/>
    <ReviewList count={this.state.reviewCount} reviews={this.state.reviews} getReviews={this.getReviews}/>
  </section>
  )
}
}

export default App;

{/* <div id="reviews">
  <div>
    <div>
      <section>
        <div>
          <div style="margin-bottom: 12px;">
            <div class="_2h22gn">
              <div class="_1ers5f61">
                <div class="_f8t6x1">
                  <div class="_djxl322">
                    <div class="_17erhr0e">
                      <div class="_vy3ibx">
                        <h2 tabindex="-1" class="_fecoyn4"><span class="_s1tlw0m">152 Reviews</span></h2>
                        <div class="_l0ao8q">
                          <div itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
                            <div itemprop="ratingValue" content="5"><span role="img"
                                aria-label="Rating 5 out of 5"><span class="_1hojkzx8"><svg viewBox="0 0 1000 1000"
                                    role="presentation" aria-hidden="true" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <path
                                      d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                                    </path>
                                  </svg></span><span class="_1hojkzx8"><svg viewBox="0 0 1000 1000" role="presentation"
                                    aria-hidden="true" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <path
                                      d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                                    </path>
                                  </svg></span><span class="_1hojkzx8"><svg viewBox="0 0 1000 1000" role="presentation"
                                    aria-hidden="true" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <path
                                      d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                                    </path>
                                  </svg></span><span class="_1hojkzx8"><svg viewBox="0 0 1000 1000" role="presentation"
                                    aria-hidden="true" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <path
                                      d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                                    </path>
                                  </svg></span><span class="_1hojkzx8"><svg viewBox="0 0 1000 1000" role="presentation"
                                    aria-hidden="true" focusable="false"
                                    style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                    <path
                                      d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                                    </path>
                                  </svg></span></span></div>
                            <div class="_1m8bb6v" itemprop="reviewCount" content="152"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="_tvh5ly1">
                <div class="_f8t6x1">
                  <div class="_djxl322">
                    <div class="_17erhr0e">
                      <div class="_9hxttoo">
                        <div dir="ltr">
                          <div class="_1wcr140x">
                            <div class="_ncmdki">
                              <div class="_55316h" style="visibility: visible; height: 46px;">
                                <div class="_nncr1bm">
                                  <div class="_ni9axhe"><svg viewBox="0 0 24 24" role="presentation" aria-hidden="true"
                                      focusable="false"
                                      style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                      <path
                                        d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1"
                                        fill-rule="evenodd"></path>
                                    </svg></div>
                                </div>
                              </div>
                            </div>
                            <div class="_178faes"><input type="text" class="_14fdu48d" id="p3-ReviewsSearchBox"
                                name="p3-ReviewsSearchBox" placeholder="Search reviews" value=""></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="margin-top: 16px; margin-bottom: 16px;">
              <div class="_7qp4lh"></div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="_2h22gn">
            <div class="_en5l15m">
              <div>
                <div style="margin-bottom: 12px;">
                  <div class="_2h22gn">
                    <div class="_iq8x9is"><span class="_czm8crp">Accuracy</span></div>
                    <div class="_iq8x9is">
                      <div class="_1iu38l3"><span role="img" aria-label="Rating 5 out of 5"><span class="_1cb248s8"><svg
                              viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span></span></div>
                    </div>
                  </div>
                </div>
                <div style="margin-bottom: 12px;">
                  <div class="_2h22gn">
                    <div class="_iq8x9is"><span class="_czm8crp">Communication</span></div>
                    <div class="_iq8x9is">
                      <div class="_1iu38l3"><span role="img" aria-label="Rating 5 out of 5"><span class="_1cb248s8"><svg
                              viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span></span></div>
                    </div>
                  </div>
                </div>
                <div style="margin-bottom: 12px;">
                  <div class="_2h22gn">
                    <div class="_iq8x9is"><span class="_czm8crp">Cleanliness</span></div>
                    <div class="_iq8x9is">
                      <div class="_1iu38l3"><span role="img" aria-label="Rating 4.5 out of 5"><span
                            class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true"
                              focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_z88ebjv"><span class="_15qz71s"><svg viewBox="0 0 1000 1000"
                                role="presentation" aria-hidden="true" focusable="false"
                                style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                <path
                                  d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                                </path>
                              </svg></span><span class="_odm2ne"><svg viewBox="0 0 1000 1000" role="presentation"
                                aria-hidden="true" focusable="false"
                                style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                <path
                                  d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z">
                                </path>
                              </svg></span></span></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_en5l15m">
              <div class="_1530dt5">
                <div style="margin-bottom: 12px;">
                  <div class="_2h22gn">
                    <div class="_iq8x9is"><span class="_czm8crp">Location</span></div>
                    <div class="_iq8x9is">
                      <div class="_1iu38l3"><span role="img" aria-label="Rating 5 out of 5"><span class="_1cb248s8"><svg
                              viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span></span></div>
                    </div>
                  </div>
                </div>
                <div style="margin-bottom: 12px;">
                  <div class="_2h22gn">
                    <div class="_iq8x9is"><span class="_czm8crp">Check-in</span></div>
                    <div class="_iq8x9is">
                      <div class="_1iu38l3"><span role="img" aria-label="Rating 5 out of 5"><span class="_1cb248s8"><svg
                              viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span></span></div>
                    </div>
                  </div>
                </div>
                <div style="margin-bottom: 12px;">
                  <div class="_2h22gn">
                    <div class="_iq8x9is"><span class="_czm8crp">Value</span></div>
                    <div class="_iq8x9is">
                      <div class="_1iu38l3"><span role="img" aria-label="Rating 4.5 out of 5"><span
                            class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true"
                              focusable="false" style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_1cb248s8"><svg viewBox="0 0 1000 1000" role="presentation"
                              aria-hidden="true" focusable="false"
                              style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                              <path
                                d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                              </path>
                            </svg></span><span class="_z88ebjv"><span class="_15qz71s"><svg viewBox="0 0 1000 1000"
                                role="presentation" aria-hidden="true" focusable="false"
                                style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                <path
                                  d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z">
                                </path>
                              </svg></span><span class="_odm2ne"><svg viewBox="0 0 1000 1000" role="presentation"
                                aria-hidden="true" focusable="false"
                                style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                <path
                                  d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z">
                                </path>
                              </svg></span></span></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="margin-top: 16px; margin-bottom: 24px;">
            <div style="margin-top: 16px; margin-bottom: 16px;">
              <div class="_7qp4lh"></div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <div class="_hgs47m">
                    <div class="_1thk0tsb">
                      <div class="_e296pg" style="height: 48px; width: 48px; display: block;"><a
                          href="/users/show/4723520" target="_blank" rel="noopener noreferrer" class="_1oa3geg"
                          aria-label="Rachael User Profile" aria-busy="false"><img class="_1mgxxu3"
                            src="https://a0.muscache.com/im/users/4723520/profile_pic/1402282455/original.jpg?aki_policy=profile_x_medium"
                            alt="Rachael User Profile" title="Rachael User Profile" width="48" height="48"></a></div>
                    </div>
                    <div class="_n5lh69r">
                      <div style="margin-left: 16px;">
                        <div>
                          <div class="_1p3joamp">Rachael</div>
                        </div>
                        <div><span class="_1jlnvra2">March 2019</span></div>
                      </div>
                    </div>
                    <div class="_1thk0tsb"><button type="button" class="_1rp5252" style="padding: 4px; margin: -4px;"
                        aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: rgb(118, 118, 118);">
                          <path
                            d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z"
                            fill-rule="evenodd"></path>
                        </svg></button></div>
                  </div>
                  <div style="margin-top: 16px;">
                    <div data-review-id="423323355">
                      <div>
                        <div dir="ltr" class="_czm8crp" tabindex="-1">This Airbnb is incredibly perched on a mountain
                          overlooking the Pacific Ocean. The location is by far, one of the best we've experienced on
                          our travels around the world! We enjoyed waking up to each sunrise and happy hour on the deck
                          during each sunset. The night sky was majestic with stars as well. We loved our stay!</div>
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 24px; margin-bottom: 24px;">
                    <div class="_7qp4lh"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div class="_hgs47m">
                    <div class="_1thk0tsb">
                      <div class="_e296pg" style="height: 48px; width: 48px; display: block;"><a
                          href="/users/show/4700347" target="_blank" rel="noopener noreferrer" class="_1oa3geg"
                          aria-label="Susan User Profile" aria-busy="false"><img class="_1mgxxu3"
                            src="https://a0.muscache.com/im/users/4700347/profile_pic/1392244895/original.jpg?aki_policy=profile_x_medium"
                            alt="Susan User Profile" title="Susan User Profile" width="48" height="48"></a></div>
                    </div>
                    <div class="_n5lh69r">
                      <div style="margin-left: 16px;">
                        <div>
                          <div class="_1p3joamp">Susan</div>
                        </div>
                        <div><span class="_1jlnvra2">March 2019</span></div>
                      </div>
                    </div>
                    <div class="_1thk0tsb"><button type="button" class="_1rp5252" style="padding: 4px; margin: -4px;"
                        aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: rgb(118, 118, 118);">
                          <path
                            d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z"
                            fill-rule="evenodd"></path>
                        </svg></button></div>
                  </div>
                  <div style="margin-top: 16px;">
                    <div data-review-id="419396438">
                      <div>
                        <div dir="ltr" class="_czm8crp">My husband and I loved every moment spent at The Hideaway. The
                          views are remarkable, the ambience is comfortable and the house is well stocked and clean. We
                          enjoyed picking clementines off of the trees to eat and walking to the apartment under a
                          canopy of trees and vines and by…<button type="button" class="_pgfpyhv" aria-busy="false">Read
                            more</button></div>
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 24px; margin-bottom: 24px;">
                    <div class="_7qp4lh"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div class="_hgs47m">
                    <div class="_1thk0tsb">
                      <div class="_e296pg" style="height: 48px; width: 48px; display: block;"><a
                          href="/users/show/15793688" target="_blank" rel="noopener noreferrer" class="_1oa3geg"
                          aria-label="Britney User Profile" aria-busy="false"><img class="_1mgxxu3"
                            src="https://a0.muscache.com/im/users/15793688/profile_pic/1404923638/original.jpg?aki_policy=profile_x_medium"
                            alt="Britney User Profile" title="Britney User Profile" width="48" height="48"></a></div>
                    </div>
                    <div class="_n5lh69r">
                      <div style="margin-left: 16px;">
                        <div>
                          <div class="_1p3joamp">Britney</div>
                        </div>
                        <div><span class="_1jlnvra2">February 2019</span></div>
                      </div>
                    </div>
                    <div class="_1thk0tsb"><button type="button" class="_1rp5252" style="padding: 4px; margin: -4px;"
                        aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: rgb(118, 118, 118);">
                          <path
                            d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z"
                            fill-rule="evenodd"></path>
                        </svg></button></div>
                  </div>
                  <div style="margin-top: 16px;">
                    <div data-review-id="416533474">
                      <div>
                        <div dir="ltr" class="_czm8crp">You cannot beat this view!!! Grab some groceries, books and
                          games and you never have to leave this beautiful Oasis!!!

                          The surrounding gardens and nearby hiking trails are the best!

                          I've never been so relaxed and fully enjoyed a stay like this before. I'll be back!</div>
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 24px; margin-bottom: 24px;">
                    <div class="_7qp4lh"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div class="_hgs47m">
                    <div class="_1thk0tsb">
                      <div class="_e296pg" style="height: 48px; width: 48px; display: block;"><a
                          href="/users/show/55970586" target="_blank" rel="noopener noreferrer" class="_1oa3geg"
                          aria-label="Whitney User Profile" aria-busy="false"><img class="_1mgxxu3"
                            src="https://a0.muscache.com/im/pictures/user/92d84255-7295-45ec-b4fd-e858b7f602e6.jpg?aki_policy=profile_x_medium"
                            alt="Whitney User Profile" title="Whitney User Profile" width="48" height="48"></a></div>
                    </div>
                    <div class="_n5lh69r">
                      <div style="margin-left: 16px;">
                        <div>
                          <div class="_1p3joamp">Whitney</div>
                        </div>
                        <div><span class="_1jlnvra2">February 2019</span></div>
                      </div>
                    </div>
                    <div class="_1thk0tsb"><button type="button" class="_1rp5252" style="padding: 4px; margin: -4px;"
                        aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: rgb(118, 118, 118);">
                          <path
                            d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z"
                            fill-rule="evenodd"></path>
                        </svg></button></div>
                  </div>
                  <div style="margin-top: 16px;">
                    <div data-review-id="414169503">
                      <div>
                        <div dir="ltr" class="_czm8crp">We spent a long weekend in February at Ling and David’s place.
                          The property and views are gorgeous. Sunrises and sunsets are spectacular. Winding hills to
                          get there but still close to get to a good dinner or breakfast. We controlled the temp fine
                          with the fans and heaters…<button type="button" class="_pgfpyhv" aria-busy="false">Read
                            more</button></div>
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 24px; margin-bottom: 24px;">
                    <div class="_7qp4lh"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div class="_hgs47m">
                    <div class="_1thk0tsb">
                      <div class="_e296pg" style="height: 48px; width: 48px; display: block;"><a
                          href="/users/show/224491803" target="_blank" rel="noopener noreferrer" class="_1oa3geg"
                          aria-label="Jessica User Profile" aria-busy="false"><img class="_1mgxxu3"
                            src="https://a0.muscache.com/im/pictures/user/814e7eea-0829-4783-9c5f-b4c6759b290f.jpg?aki_policy=profile_x_medium"
                            alt="Jessica User Profile" title="Jessica User Profile" width="48" height="48"></a></div>
                    </div>
                    <div class="_n5lh69r">
                      <div style="margin-left: 16px;">
                        <div>
                          <div class="_1p3joamp">Jessica</div>
                        </div>
                        <div><span class="_1jlnvra2">January 2019</span></div>
                      </div>
                    </div>
                    <div class="_1thk0tsb"><button type="button" class="_1rp5252" style="padding: 4px; margin: -4px;"
                        aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: rgb(118, 118, 118);">
                          <path
                            d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z"
                            fill-rule="evenodd"></path>
                        </svg></button></div>
                  </div>
                  <div style="margin-top: 16px;">
                    <div data-review-id="405234418">
                      <div>
                        <div dir="ltr" class="_czm8crp">Gorgeous views</div>
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 24px; margin-bottom: 24px;">
                    <div class="_7qp4lh"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div class="_hgs47m">
                    <div class="_1thk0tsb">
                      <div class="_e296pg" style="height: 48px; width: 48px; display: block;"><a
                          href="/users/show/38025756" target="_blank" rel="noopener noreferrer" class="_1oa3geg"
                          aria-label="Thinh User Profile" aria-busy="false"><img class="_1mgxxu3"
                            src="https://a0.muscache.com/im/users/38025756/profile_pic/1436479455/original.jpg?aki_policy=profile_x_medium"
                            alt="Thinh User Profile" title="Thinh User Profile" width="48" height="48"></a></div>
                    </div>
                    <div class="_n5lh69r">
                      <div style="margin-left: 16px;">
                        <div>
                          <div class="_1p3joamp">Thinh</div>
                        </div>
                        <div><span class="_1jlnvra2">January 2019</span></div>
                      </div>
                    </div>
                    <div class="_1thk0tsb"><button type="button" class="_1rp5252" style="padding: 4px; margin: -4px;"
                        aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: rgb(118, 118, 118);">
                          <path
                            d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z"
                            fill-rule="evenodd"></path>
                        </svg></button></div>
                  </div>
                  <div style="margin-top: 16px;">
                    <div data-review-id="401764751">
                      <div>
                        <div dir="ltr" class="_czm8crp">Amazing location, view, cozy setup. Can't get any better if you
                          are looking for a place to spend time with your loved ones. Did I mention the view is
                          breathtaking?</div>
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 24px; margin-bottom: 24px;">
                    <div class="_7qp4lh"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div class="_hgs47m">
                    <div class="_1thk0tsb">
                      <div class="_e296pg" style="height: 48px; width: 48px; display: block;"><a
                          href="/users/show/67647285" target="_blank" rel="noopener noreferrer" class="_1oa3geg"
                          aria-label="Katie User Profile" aria-busy="false"><img class="_1mgxxu3"
                            src="https://a0.muscache.com/im/pictures/53db97b3-a888-41f5-96a1-159e50804c40.jpg?aki_policy=profile_x_medium"
                            alt="Katie User Profile" title="Katie User Profile" width="48" height="48"></a></div>
                    </div>
                    <div class="_n5lh69r">
                      <div style="margin-left: 16px;">
                        <div>
                          <div class="_1p3joamp">Katie</div>
                        </div>
                        <div><span class="_1jlnvra2">December 2018</span></div>
                      </div>
                    </div>
                    <div class="_1thk0tsb"><button type="button" class="_1rp5252" style="padding: 4px; margin: -4px;"
                        aria-busy="false"><svg viewBox="0 0 24 24" role="img" aria-label="Report" focusable="false"
                          style="height: 1em; width: 1em; display: block; fill: rgb(118, 118, 118);">
                          <path
                            d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z"
                            fill-rule="evenodd"></path>
                        </svg></button></div>
                  </div>
                  <div style="margin-top: 16px;">
                    <div data-review-id="363037331">
                      <div>
                        <div dir="ltr" class="_czm8crp">Beautiful loving space! The drive up is amazing and the views
                          are outstanding. The space is lovely and I thoroughly enjoyed every bit.</div>
                      </div>
                    </div>
                  </div>
                  <div style="margin-top: 24px; margin-bottom: 24px;">
                    <div class="_7qp4lh"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="_36rlri">
              <div style="margin-bottom: 32px;">
                <nav role="navigation" data-id="p3-ReviewsPagination"><span>
                    <div>
                      <ul data-id="p3-ReviewsPagination" class="_11hau3k">
                        <li class="_1b9fs2rr"><button type="button" class="_1ip5u88" aria-busy="false">
                            <div class="_1yofwd5">
                              <div class="_1rltvky"><svg viewBox="0 0 18 18" role="img" aria-label="Next"
                                  focusable="false"
                                  style="height: 1em; width: 1em; display: block; fill: currentcolor;">
                                  <path
                                    d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                                    fill-rule="evenodd"></path>
                                </svg></div>
                            </div>
                          </button></li>
                      </ul>
                    </div>
                  </span></nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div> */}