import { useState } from "react"
import { patchVotesByReviewId } from "../utils/api"

const Votes = ({votes, review_id}) => {
    const [votesChange, setVotesChange] = useState(0)

    const incVotes = (increase) => {
        setVotesChange((currChange) => {
            return currChange + increase
        })
        patchVotesByReviewId(review_id, increase)
    }

    return (
        <div>
            <button disabled={votesChange === -1} onClick={() => incVotes(-1)}>🔻</button>
            <span>{votes + votesChange}</span>
            <button disabled={votesChange === 1} onClick={() => incVotes(1)}>🔺</button>
        </div>
    )
}

export default Votes