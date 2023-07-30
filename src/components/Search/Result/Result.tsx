import classes from "./Result.module.scss";

interface ResultProps {
  title: string;
  subtitle: string;
  href: string;
}

export default ({ title, subtitle, href }: ResultProps) => <a href={href} className={classes.root}>
  <div className={classes.title}>{title}</div>
  <div className={classes.subtitle}>{subtitle}</div>
</a>;