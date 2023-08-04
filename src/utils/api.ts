import axios from 'axios'

const BASE_URL = 'https://mmc-backend.vercel.app'

export interface IArticlesQuery {
    category?: string
    country?: string
    query?: string
}

export interface IContentQuery {
    category: string
    week: string
}

export interface IProfileQuery {
    username: string
}

export const getArticles = async (articlesQuery: IArticlesQuery) => {
    try {
        const response = await axios.post(`${BASE_URL}/articles`, articlesQuery)
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching articles:', error)
        throw error
    }
}

export const getContent = async (contentQuery: IContentQuery) => {
    try {
        const response = await axios.post(`${BASE_URL}/content`, contentQuery)
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching content:', error)
        throw error
    }
}

export const getProfile = async (profileQuery: IProfileQuery) => {
    try {
        const response = await axios.post(`${BASE_URL}/profile`, profileQuery)
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching content:', error)
        throw error
    }
}
