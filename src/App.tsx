import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "components/Navbar/Navbar";
import Search from "components/Search/Search";
import Title from "components/Title/Title";
import Article from "components/Article/Article";
import Profiles from "components/Profiles/Profiles";
import "App.scss";
import { Churros } from "components/Churros/Churros";
import { IContentQuery, getArticleCategories, getArticleCountries, getArticles, getContent, getProfile } from "utils/api";
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
  const href = location.href.split("/")
  if (href[href.length - 1] === 'crash-course') {
    return <ThemeProvider theme={theme}>
      <Churros />
    </ThemeProvider>
  }

  const [articles, setArticles] = useState<IArticleJSON[]>()
  const [article, setArticleJSON] = useState<IArticleJSON>()
  const [profiles, setProfilesJSON] = useState<IProfileJSON[]>()

  const [countries, setCountries] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])

  const loadOptions = async () => {
    setCountries(await getArticleCountries())
    setCategories(await getArticleCategories())
  }

  const fetchArticles = async () => {
    setArticles(await getArticles({}))
  }

  const loadArticle = async (contentQuery: IContentQuery) => {
    const content = await getContent(contentQuery)
    setArticleJSON(content)
    let profile_contents: IProfileJSON[] = []
    content.authors.foreach(async (author: string) => {
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
      {article && profiles ? (
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
          countries={countries}
          categories={categories}
        />
      )}
    </ThemeProvider>
  );
};
