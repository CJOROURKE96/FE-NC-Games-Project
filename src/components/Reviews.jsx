import {useState} from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    return (
        <ReviewCard reviews={reviews} setReviews={setReviews}/>
    )
}

export default Reviews