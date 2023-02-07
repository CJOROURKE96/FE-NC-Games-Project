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
    console.log(review_id, "<-- ID")
    console.log(review, "<- Review")
    return (
        <section>
            <ul className="list">
                        <li className="single-review-heading"> <h2 id="review-title"> {review.title}</h2> </li>
                        <li className="single-review-heading" id='game-designer'>Game Designer: {review.designer}</li>
                        <li id="review-img"><img src={review.review_img_url}></img></li>
                        <li className="single-review-footer" id='review-owner'>Review Author: {review.owner}</li>
                        <li className="single-review-footer" id="review-votes"> 👍 {review.votes} 👎</li>
                        <li id="review-comments"> <h3>Comments:</h3> <h4>{review.comments}</h4></li>
                    
                    </ul>
        </section>
    )
}

export default SingleReviewCard