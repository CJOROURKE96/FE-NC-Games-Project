import axios from 'axios'

const reviewsAPI = axios.create({
    baseURL: 'https://nc-games-k21m.onrender.com/api'
})

export const getReviews = () => {
    return reviewsAPI.get('/')
    .then(({data}) => {
        console.log(data)
    })

}