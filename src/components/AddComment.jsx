import { useState } from "react"
import { postComment } from "../utils/api"
import { Button } from "@mui/material"

const AddComment = ({review_id, comments, setComments}) => {
    const username = 'cooljmessy'
    const [newComment, setNewComment] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        postComment(review_id, newComment, username).then(({data}) => {
            setComments([data.comment, ...comments])
        })
        setNewComment('')
    }

    return (
        <section>
        <form id="comment-form" onSubmit={handleSubmit}>
            <label id="comment-label" htmlFor="post-comment">Comment:</label>
            <textarea id='post-comment' value={newComment} onChange={(event) => {
                setNewComment(event.target.value)
            }}></textarea>
        <Button type="submit" id="comment-button" variant='outlined'>Submit Comment!</Button>
        </form>
        </section>
    )
}

export default AddComment