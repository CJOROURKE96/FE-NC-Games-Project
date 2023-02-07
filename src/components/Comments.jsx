import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getComments } from "../utils/api"

const Comments = () => {
const {review_id} = useParams()
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    setIsLoading(true)
    getComments(review_id).then((commentById) => {
        setComments(commentById)
        setIsLoading(false)
    })
}, [review_id])

if(isLoading) {
    return <p>Comments are Loading ...</p>
} else 

return (
    <section>
        {comments.map((comment) => {
        return <ul key={comment.comment_id}>
                {console.log(comment, "<- comment")}
                <li id='comment-author'>{comment.author}</li>
                <li id='comment-body'>{comment.body}</li>
                <li id='comment-votes'>{comment.votes}</li>
            </ul>
            })}
    </section>
)
}

export default Comments