import Button from '@mui/material/Button';
import { useState } from "react"
import { patchVotesByReviewId } from "../utils/api"

const CommentVotes = ({votes, review_id}) => {
    const [votesChange, setVotesChange] = useState(0)

    const incVotes = (increase) => {
        setVotesChange((currChange) => {
            return currChange + increase
        })
        patchVotesByReviewId(review_id, increase)
    }

    return (
        <div>
            <Button variant='contained' className="negative-vote" disabled={votesChange === -1} onClick={() => incVotes(-1)}>🔻</Button>
            <span className="votes-total"><em>{votes + votesChange}</em></span>
            <Button variant='contained' className="positive-vote" disabled={votesChange === 1} onClick={() => incVotes(1)}>🔺</Button>
        </div>
    )
}

export default CommentVotes