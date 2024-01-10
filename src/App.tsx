import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "components/Navbar/Navbar";
import Search from "components/Search/Search";
import Title from "components/Title/Title";
import Article from "components/Article/Article";
import Profiles from "components/Profiles/Profiles";
import "App.scss";
import { IContentQuery, getArticleCategories, getArticles, getContent, getProfile } from "utils/api";
import { IArticleJSON, IProfileJSON } from "interfaces/interfaces";

const theme = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    fontFamily: "Lato"
  }
});


export default () => {

  const [articles, setArticles] = useState<IArticleJSON[]>()
  const [article, setArticleJSON] = useState<IArticleJSON>()
  const [profiles, setProfilesJSON] = useState<IProfileJSON[]>()
  const [categories, setCategories] = useState<string[]>([])

  const loadOptions = async () => {
    setCategories(await getArticleCategories())
  }

  const fetchArticles = async () => {
    setArticles(await getArticles({}))
  }

  const loadArticle = async (contentQuery: IContentQuery) => {
    const content = await getContent(contentQuery)
    setArticleJSON(content)
    let profile_contents: IProfileJSON[] = []
    content.authors.forEach(async (author: string) => {
      profile_contents.push(await getProfile({username: author}))
    })
    setProfilesJSON(profile_contents)
  }

  useEffect(() => {
    loadOptions();
    fetchArticles()
  }, []);

  useEffect(() => {
    const [category, week] = location.href.split("/").slice(-2);
    loadArticle({category, week})
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {articles && <Navbar articles={articles} />}
      {(article && profiles && profiles.length && !article) ? (
        <>
          <Title
            title={article.title}
            subtitle=""
          />
          <Profiles profiles={profiles} />
          <Article {...article} />
        </>
      ) : (
        <Search
          categories={categories}
        />
      )}
    </ThemeProvider>
  );
};
