import axios from 'axios'

const reviewsAPI = axios.create({
    baseURL: 'https://nc-games-k21m.onrender.com/api'
})

export const getReviews = (category, sortBy, orderBy) => {
    return reviewsAPI
    .get('/reviews', {
        params: {
            category: category,
            sort_by: sortBy,
            order_by: orderBy
        }
    })
    .then(({data}) => {
        return data.reviews
    })

}

export const getReviewsByReviewId = (review_id) => {
    return reviewsAPI
    .get(`/reviews/${review_id}`)
    .then(({data}) => {
        return data.review
    })
}

export const getComments = (review_id) => {
    return reviewsAPI
    .get(`/reviews/${review_id}/comments`)
    .then(({data}) => {
        return data.comments
        
    })
}

export const patchVotesByReviewId = (review_id, vote_inc) => {
    const patchBody = { 
        inc_votes: vote_inc
    }

    return reviewsAPI
    .patch(`/reviews/${review_id}`, patchBody)
    
}

export const postComment = (review_id, comment, username) => {
const postBody = {
    username: username,
    body: comment
}
    return reviewsAPI
    .post(`/reviews/${review_id}/comments`, postBody)
}