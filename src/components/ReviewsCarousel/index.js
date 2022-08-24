// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewsData: 0}

  onClickRightArrow = () => {
    const {reviewsData} = this.state
    const {reviewsList} = this.props
    const reviewsLength = reviewsList.length
    if (reviewsData < reviewsLength - 1) {
      this.setState(prevState => ({reviewsData: prevState.reviewsData + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {reviewsData} = this.state
    if (reviewsData > 0) {
      this.setState(prevState => ({reviewsData: prevState.reviewsData - 1}))
    }
  }

  render() {
    const {reviewsData} = this.state
    const {reviewsList} = this.props
    const imgLink = reviewsList[reviewsData].imgUrl
    const userName = reviewsList[reviewsData].username
    const company = reviewsList[reviewsData].companyName
    const desc = reviewsList[reviewsData].description

    return (
      <div className="bg-container">
        <h1 className="reviews-head">Reviews</h1>
        <img src={imgLink} alt={userName} />
        <div className="desc-cont">
          <button
            type="button"
            testid="leftArrow"
            className="left-arrow-button"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          <p className="username">{userName}</p>
          <button
            type="button"
            testid="rightArrow"
            className="right-arrow-button"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company">{company}</p>
        <p className="company-desc">{desc}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
