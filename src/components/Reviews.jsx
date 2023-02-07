import {useState} from 'react'
import ReviewCard from './ReviewCard'
import SingleReview from './SingleReview'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    return (
        <main>
        <ReviewCard reviews={reviews} setReviews={setReviews}/>
        </main>
    )
}

export default Reviews