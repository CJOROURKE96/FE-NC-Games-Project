import {useState} from 'react'
import SingleReviewCard from "./SingleReviewCard"

const SingleReview = () => {
    const [review, setReview] = useState([])

    return (
        <section>
            <SingleReviewCard review={review} setReview={setReview}/>
        </section>
    )
}

export default SingleReview