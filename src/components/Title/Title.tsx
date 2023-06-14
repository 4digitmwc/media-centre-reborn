import classes from "./Title.module.scss";

interface TitleProps {
  title: string;
  subtitle?: string;
}

export default ({ title, subtitle }: TitleProps) => (
  <div className={classes.root}>
    <h1 className={classes.title}>{title}</h1>
    {subtitle && <h2 className={classes.subtitle}>{subtitle}</h2>}
  </div>
)