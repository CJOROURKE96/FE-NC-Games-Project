import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { getReviewsByReviewId } from "../utils/api"
import Comments from './Comments'
import ReviewVotes from "./ReviewVotes"
import { Grid } from "@mui/material"

const SingleReviewCard = ({review, setReview}) => {
    const {review_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        getReviewsByReviewId(review_id).then((reviewById) => {
            setReview(reviewById)
            setIsLoading(false)
        })
    }, [review_id])

    if(isLoading) {
        return <p>Review is Loading ...</p>
    } else

    return (
        <section>
            <ul className="list">
                    <Grid 
                    container-spacing={2}>
                        <li className="single-review-heading"> <h2 id="review-title"> {review.title}</h2> </li>
                        <li className="single-review-heading" id='game-designer'>Game Designer: {review.designer}</li>
                    </Grid>
                    <Grid>
                        <li className="review-img"><img src={review.review_img_url} alt={review.title}></img></li>
                    </Grid>
                    <Grid
                    constainer-spacing={2}>
                        <li className="single-review-footer" id='review-owner'>Review Author: {review.owner}</li>
                        <li className="single-review-footer"><ReviewVotes votes={review.votes} review_id={review_id}/></li>
                    </Grid>
                        <li id="single-review-body"> {review.review_body} </li>
                        <li className="review-comment-count"> <h3 id='comment-count-heading'> <Link to={`/reviews/${review_id}/comments`}> Comment Section: </Link> </h3></li>
                        <li><Comments /></li>
                    
                    </ul>
                    
        </section>
    )
}

export default SingleReviewCard