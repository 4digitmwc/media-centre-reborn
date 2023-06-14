import { useState, useEffect } from "react";

import Navbar from "components/Navbar/Navbar";
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

const importArticles = import.meta.glob("./md/4dm2023/articles/**/*.md");
const importProfiles = import.meta.glob("./md/4dm2023/profiles/*.md");

export default () => {
  const [articles, setArticles] = useState<Record<string, IArticle>>();
  const [article, setArticle] = useState<IArticle>();
  const [profiles, setProfiles] = useState<IProfile[]>();

  // Import and load all articles to feed the navbar
  useEffect(() => {
    Promise.all(
      Object.entries(importArticles).map(
        ([path, fn]) => fn().then(articlePayload => {
          if (isArticle(articlePayload)) {
            const pathTail = `${path.split('/').slice(-2)[0]}/${articlePayload.attributes.postName}`;
            return { ...articlePayload, path: pathTail } as IArticle;
          }
        })
      )
    ).then(
      (articlesPayload) => {
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
          Promise.all(
            articlePayload.attributes.authors.map((author) =>
              importProfiles[`./md/4dm2023/profiles/${author}.md`]()
            )
          ).then((profilesPayload) => {
            if (isProfiles(profilesPayload)) {
              setProfiles(profilesPayload);
              setArticle(articlePayload);
            }
          });
        }
      }
    );
  }, []);

  return (
    <>
      {articles && <Navbar articles={articles} />}
      {article && profiles && (
        <>
          <Title
            title={article.attributes.title}
            subtitle={article.attributes.subtitle}
          />
          <Profiles profiles={profiles} />
          <Article {...article} />
        </>
      )}
    </>
  );
};
