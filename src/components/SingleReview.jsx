import SingleReviewCard from "./SingleReviewCard"

const SingleReview = ({review, setReview}) => {
    return (
        <section>
            <SingleReviewCard review={review} setReview={setReview}/>
        </section>
    )
}

export default SingleReview