import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "components/Navbar/Navbar";
import Search from "components/Search/Search";
import Title from "components/Title/Title";
import Article from "components/Article/Article";
import Profiles from "components/Profiles/Profiles";
import "App.scss";
import { IContentQuery, getArticleCategories, getArticles, getContent } from "utils/api";
import { IArticleJSON } from "interfaces/interfaces";

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
      {(article) ? (
        <>
          <Title
            title={article.title}
            subtitle=""
          />
          <Profiles profiles={article.authors} />
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
