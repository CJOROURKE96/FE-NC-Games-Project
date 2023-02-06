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