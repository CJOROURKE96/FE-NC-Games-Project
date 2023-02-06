import axios from 'axios'

const reviewsAPI = axios.create({
    baseURL: 'https://nc-games-k21m.onrender.com/api'
})

export const getReviews = () => {
    return reviewsAPI.get('/reviews')
    .then(({data}) => {
        return data.reviews
    })

}

export const getReviewsByReviewId = (review_id) => {
    return reviewsAPI
    .get(`/reviews/${review_id}`, {
        params: {
            review_id: review_id
        }
    })
    .then(({data}) => {
        return data.review
    })
}