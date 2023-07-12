import React, {useState} from 'react'
import classes from "./Analysis.module.scss"
import { Article as IArticle, isArticle } from "components/Article/Article"
import Article from 'components/Article/Article'
import { Select, SelectChangeEvent, MenuItem } from '@mui/material'

const AnalysisArticles = import.meta.glob("md/mwc2023/analysis/*.md")

export const TeamAnalysis: React.FC<{teamlist: string[]}> = ({teamlist}) => {
    const [team, setTeam] = useState<string>(teamlist[0])
    const [article, setArticle] = useState<IArticle | null>()
    const path = `md/mwc2023/analysis/${team}.md`
    AnalysisArticles[path]().then(articlePayload => {
        if (isArticle(articlePayload)) {
            setArticle(({ ...articlePayload, path } as IArticle))
        }
    })
    const handleChange = (event: SelectChangeEvent) => {
        setTeam(event.target.value as string)
    }
    return <div className={classes.root}>
        <Select value={team} onChange={handleChange}>
            {teamlist.map((teamName: string) => {
                return <MenuItem value={teamName}>{teamName}</MenuItem>
            })}
        </Select>
        {article === null ? <>Please select the country</> : <Article {...article as IArticle} />}
    </div>
}
