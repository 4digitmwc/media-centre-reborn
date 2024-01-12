export interface IProfileJSON {
    category: string
    profile_link: string
    username: string
    display_image: string
    contentHTML: string
}
  

export interface IArticleJSON {
    authors: IProfileJSON[]
    category: string
    contentHTML: string
    title: string
    week: string
}
