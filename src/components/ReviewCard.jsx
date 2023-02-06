import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"

const ReviewCard = ({reviews, setReviews}) => {
    const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
        setIsLoading(true)
        getReviews().then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <p>Loading reviews ...</p>
    } else 

    return (
        <section>
                {reviews.map((review) => {
            return <ul className="list" key={review.review_id}>
                        <li> <h2 id="review-title"> {review.title}</h2> </li>
                        <li id="review-img"><img src={review.review_img_url}></img></li>
                        <li id="review-votes"> <h3>Votes: </h3> <h4>{review.votes}</h4></li>
                        <li id="review-comments"> <h3>Comment Count: </h3> <h4>{review.comment_count}</h4></li>
                    
                    </ul>
                })}
        </section>
    )
}

export default ReviewCard