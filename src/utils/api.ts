import axios from 'axios'

const BASE_URL = 'mmc-backend.vercel.app'

export interface IArticlesQuery {
    category?: string
    country?: string
    query?: string
}

export interface IContentQuery {
    category: string
    week: string
}

export const getArticles = async (articlesQuery: IArticlesQuery) => {
    try {
        const response = await axios.get(`${BASE_URL}/articles`, { params: articlesQuery })
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching articles:', error)
        throw error
    }
}

export const getContent = async (contentQuery: IContentQuery) => {
    try {
        const response = await axios.get(`${BASE_URL}/content`, { params: contentQuery })
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching content:', error)
        throw error
    }
}
