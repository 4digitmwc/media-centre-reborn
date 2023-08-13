import { IArticleJSON } from "interfaces/interfaces";
import classes from "./Article.module.scss";

export function isArticle(obj: unknown): obj is IArticleJSON {
  return !!obj && typeof (obj as IArticleJSON).contentHTML === "string";
}

export default ({ contentHTML }: IArticleJSON) => (
  <div className={classes.root} dangerouslySetInnerHTML={{ __html: contentHTML }} />
)
