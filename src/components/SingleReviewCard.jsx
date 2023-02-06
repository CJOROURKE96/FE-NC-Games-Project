import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getReviewsByReviewId } from "../utils/api"

const SingleReviewCard = ({review, setReview}) => {
    const {review_id} = useParams()
    
    useEffect(() => {
        getReviewsByReviewId(review_id).then((reviewById) => {
            setReview(reviewById)
        })
    }, [review_id])
    console.log(review, "<- Review")
    console.log(review_id, "<- Review Id")
    return (
        <section>
            <ul className="list">
                        <li> <h2 id="review-title"> {review.title}</h2> </li>
                        <li id="review-img"><img src={review.review_img_url}></img></li>
                        <li id="review-votes"> <h3>Votes: </h3> <h4>{review.votes}</h4></li>
                        <li id="review-comments"> <h3>Comment Count: </h3> <h4>{review.comment_count}</h4></li>
                    
                    </ul>
        </section>
    )
}

export default SingleReviewCard