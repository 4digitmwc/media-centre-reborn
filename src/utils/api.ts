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

export interface IChurrosQuery {
    country: string
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
    console.log(contentQuery)
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

export const getChurrosCountries = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/churros/countries`)
        return data
    } catch (error) {
        console.error('Error fetching countries:', error)
        throw error
    }
}

export const getChurros = async (churrosQuery: IChurrosQuery) => {
    try {
        const response = await axios.post(`${BASE_URL}/churros/content`, churrosQuery)
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching content:', error)
        throw error
    }
}

export const getArticleCountries = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/countries`)
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching content:', error)
        throw error
    }
}

export const getArticleCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`)
        const data = response.data
        return data
    } catch (error) {
        console.error('Error fetching content:', error)
        throw error
    }
}
