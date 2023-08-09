import classes from "./Article.module.scss";

export interface Article {
  path?: string;
  attributes: {
    postName: string;
    title: string;
    subtitle?: string;
    authors: string[];
  };
  html: string;
}

export function isArticle(obj: unknown): obj is Article {
  return !!obj && typeof (obj as Article).html === "string";
}

export default ({ html }: Article) => (
  <div className={classes.root} dangerouslySetInnerHTML={{ __html: html }} />
)
