import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "components/Navbar/Navbar";
import Search from "components/Search/Search";
import Title from "components/Title/Title";
import Article, {
  Article as IArticle,
  isArticle,
} from "components/Article/Article";
import Profiles, {
  Profile as IProfile,
  isProfiles,
} from "components/Profiles/Profiles";
import "App.scss";

const theme = createTheme({
  palette: {
    mode: "dark"
  },
  typography: {
    fontFamily: "Lato"
  }
});

const TOURNAMENT = '4dm2023'

// TODO: Replace importing local file articles with using a backend, i.e.
// https://mmc-backend.vercel.app/content?category=predictions&week=round%20of%20727
// ayaya
const importArticles = import.meta.glob("./md/4dm2023/articles/**/*.md");
const importProfiles = import.meta.glob("./md/4dm2023/profiles/*.md");

export default () => {
  const [articles, setArticles] = useState<Record<string, IArticle>>();
  const [article, setArticle] = useState<IArticle>();
  const [profiles, setProfiles] = useState<IProfile[]>();

  const loadArticles = async () => {
    const articlesPayload = await Promise.all(
      Object.entries(importArticles).map(([path, fn]) =>
        fn().then(articlePayload => {
          if (isArticle(articlePayload)) {
            const pathTail = `${path.split('/').slice(-2)[0]}/${articlePayload.attributes.postName}`;
            return { ...articlePayload, path: pathTail } as IArticle;
          }
        })
      )
    );

    const articlesObj = articlesPayload.reduce((obj, articlePayload) => {
      if (articlePayload !== undefined) {
        obj[articlePayload.path!] = articlePayload;
      }
      return obj;
    }, {} as Record<string, IArticle>);

    const currentPath = location.href.split("/").slice(-2).join("/");

    setArticles(articlesObj);

    if (articlesObj[currentPath]) {
      const articlePayload = articlesObj[currentPath];

      const profilesPayload = await Promise.all(
        articlePayload.attributes.authors.map(author =>
          importProfiles[`./md/${TOURNAMENT}/profiles/${author}.md`]()
        )
      );

      if (isProfiles(profilesPayload)) {
        setProfiles(profilesPayload);
        setArticle(articlePayload);
      }
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {articles && <Navbar articles={articles} />}
      {article && profiles ? (
        <>
          <Title
            title={article.attributes.title}
            subtitle={article.attributes.subtitle}
          />
          <Profiles profiles={profiles} />
          <Article {...article} />
        </>
      ) : (
        <Search
          countries={["Country 1", "Country 2", "Country 3"]}
          categories={["Category 1", "Category 2", "Category 3"]}
        />
      )}
    </ThemeProvider>
  );
};
