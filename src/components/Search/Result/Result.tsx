import classes from "./Result.module.scss";

export interface ResultProps {
  title: string;
  shortened_content: string
  category: string
  week: string
}

const makehref = (category: string, week: string) => {
  return `${import.meta.env.BASE_URL}/${category}/${week}`
}

export default ({ title, shortened_content, category, week }: ResultProps) => <a href={makehref(category, week)} className={classes.root}>
  <div className={classes.title}>{title}</div>
  <div className={classes.subtitle}>{shortened_content}</div>
</a>;
