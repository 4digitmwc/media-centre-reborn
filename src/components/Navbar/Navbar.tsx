import { useState, useEffect } from 'react';
import logo from 'assets/images/4dm_logo.svg';
import classes from './Navbar.module.scss';
import { Article } from 'components/Article/Article';

interface NavbarProps {
  articles: Record<string, Article>;
}

interface CategoryEntry {
  title: string;
  href: string;
}

export default ({ articles }: NavbarProps) => {
  const [categories, setCategories] = useState<Record<string, CategoryEntry[]>>();
  const [highlightedTab, setHighlightedTab] = useState<string>();

  // Build the list of articles per categories
  useEffect(() => {
    const newCategories: Record<string, CategoryEntry[]> = {};
    Object.keys(articles).forEach(path => {
      const [category] = path.split('/');
      if (!newCategories[category]) newCategories[category] = [];
      if (articles[path].attributes.postName !== 'sample') {
        newCategories[category].push({
          title: articles[path].attributes.title,
          href: `${import.meta.env.BASE_URL}${path}`,
        });
      }
    });
    setCategories(newCategories);
  }, []);

  return <div className={classes.root} onMouseLeave={() => setHighlightedTab('')}>
    <div className={classes.logo}>
      <a href={import.meta.env.BASE_URL}><img alt="" src={logo} /></a>
    </div>
    <div className={classes.categories}>
      <a className={classes.category} onMouseOver={() => setHighlightedTab('stories')}>Stories</a>
      <a className={classes.category} onMouseOver={() => setHighlightedTab('interviews')}>Interviews</a>
      <a className={classes.category} onMouseOver={() => setHighlightedTab('opinions')}>Opinions</a>
      <a className={classes.category} onMouseOver={() => setHighlightedTab('highlights')}>Highlights</a>
    </div>
    {highlightedTab && categories && <div className={classes.panelContainer}>
      <ul className={classes.panel}>
        {categories[highlightedTab].map(entry => <li className={classes.entry}>
          <a href={entry.href}>{entry.title}</a>
        </li>)}
      </ul>
    </div>}
  </div>;
};
