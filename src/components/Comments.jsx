import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import dayjs from 'dayjs'
import { getComments } from "../utils/api"
import { Paper, Grid, Avatar, } from "@mui/material"
import CommentVotes from './CommentVotes'
import AddComment from './AddComment'

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
      <AddComment review_id={review_id} comments={comments} setComments={setComments}/>
        {comments.map((comment) => {
        return <Paper key ={comment.comment_id} style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}/>
          <Grid item>
            <Avatar alt="user.img" src={''} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{comment.author}</h4>
            <p style={{ textAlign: "left" }}>
              {comment.body}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              {dayjs(comment.created_at).format('DD-MM-YYYY')}
            </p>
            <CommentVotes votes={comment.votes} review_id={review_id}/>          
            </Grid>
          </Paper>
            })}
    </section>
)
}

export default Comments