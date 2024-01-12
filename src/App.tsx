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

// zzzs

export default () => {

  const [articles, setArticles] = useState<IArticleJSON[]>()
  const [article, setArticleJSON] = useState<IArticleJSON>()
  const [profiles, setProfilesJSON] = useState<IProfileJSON[]>([])
  const [categories, setCategories] = useState<string[]>([])

  const loadOptions = async () => {
    setCategories(await getArticleCategories())
  }

  const fetchArticles = async () => {
    setArticles(await getArticles({}))
  }

  const loadArticle = async (contentQuery: IContentQuery) => {
    const content = await getContent(contentQuery)
    content.authors.forEach(async (author: string) => {
      setProfilesJSON([...(profiles as unknown[]), await getProfile({username: author})])
    })
    setArticleJSON(content)
  }

  useEffect(() => {
    loadOptions();
    fetchArticles()
  }, []);


  useEffect(() => {
    const [category, week] = location.href.split("/").slice(-2)
    loadArticle({category, week})
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {articles && <Navbar articles={articles} />}
      {(article && profiles && profiles.length) ? (
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
