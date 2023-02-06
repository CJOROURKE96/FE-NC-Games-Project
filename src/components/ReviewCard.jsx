import { useEffect } from "react"
import { getReviews } from "../utils/api"

const ReviewCard = ({reviews, setReviews}) => {
    console.log(reviews, "<-- REVIEWS")

    useEffect(() => {
        getReviews().then((reviews) => {
            console.log(reviews, "<-- reviews")
            setReviews(reviews)
        })
    }, [])
    return (
        <section>
            <ul>

            </ul>
        </section>
    )
}

export default ReviewCard