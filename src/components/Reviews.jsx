import {useState} from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    return (
        <main>
        <ReviewCard reviews={reviews} setReviews={setReviews}/>
        </main>
    )
}

export default Reviews
