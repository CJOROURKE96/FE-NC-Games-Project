import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getReviews } from '../utils/api'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {category} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getReviews(category).then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        })
    }, [category])


    if (isLoading) {
        return <p>Loading reviews ...</p>
    } else 

    return (
        <ul>
            {reviews.map((review) => {
                return <li key={review.review_id}><ReviewCard review={review}/></li>
                })}
        </ul>
    )
}

export default Reviews