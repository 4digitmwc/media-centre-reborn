import axios from 'axios'

export async function traverseRepository(repository: string) {
    const githubURL = `https://api.github.com/repos/${repository}/contents/`
    let stack: any[] = (await axios.get(githubURL)).data
    let articles: any[] = []
    while (stack) {
        const directory = stack.pop()
        if (directory.type === "dir") {
            stack.push(...((await axios.get(directory.url)).data))
        } else if (directory.path.endsWith('.md') && (directory.path !== "readme.md")) {
            const article = (await axios.get(directory.download_url)).data
            let path = (directory.path as string).replace(`https://raw.githubusercontent.com/${repository}/main/`, "")
            path = path.slice(0, path.length - 3)
            articles.push({path, article})
        } 
    }
    return articles
}
