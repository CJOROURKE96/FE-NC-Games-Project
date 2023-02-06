import {useState} from 'react'
import ReviewCard from './ReviewCard'
import SingleReview from './SingleReview'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState([])
    return (
        <main>
        <ReviewCard reviews={reviews} setReviews={setReviews}/>
        <SingleReview review={review} setReview={setReview}/>
        </main>
    )
}

export default Reviews