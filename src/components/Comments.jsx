import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getComments } from "../utils/api"
import AddComment from "./AddComment"
import CommentVotes from "./CommentVotes"

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

if(comments.length === 0) {
    return (
        <section>
        <p>Comment Section Empty!</p>
        <AddComment review_id={review_id} comments={comments} setComments={setComments}/>
        </section>
    )

} 

if(isLoading) {
    return <p>Comments are Loading ...</p>
} else 

return (
    <section>
        {comments.map((comment) => {
        return <ul className="list" key={comment.comment_id}>
                <li id='comment-author'> <h3>{comment.author}</h3></li>
                <li id='comment-body'>{comment.body}</li>
                <li className="single-review-footer"><CommentVotes votes={comment.votes} review_id={review_id}/></li>
            </ul>
            })}
            <AddComment review_id={review_id} comments={comments} setComments={setComments}/>
    </section>
)
}

export default Comments