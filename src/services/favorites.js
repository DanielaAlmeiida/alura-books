import axios from "axios"

const favoritesAPI = axios.create({baseURL: "http://localhost:8000/favorites"})

async function getFavorites() {
    const response = await favoritesAPI.get('/')

    return response.data
}

async function postFavorite(id) {
    await favoritesAPI.post(`/${id}`)
}

async function deleteFavorite(id) {
    await favoritesAPI.delete(`/${id}`)
}

export {
    getFavorites,
    postFavorite,
    deleteFavorite
}