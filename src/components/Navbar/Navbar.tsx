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

export default function Navbar({ articles }: NavbarProps) {
  const [categories, setCategories] = useState<Record<string, CategoryEntry[]>>({});
  const [highlightedTab, setHighlightedTab] = useState<string>();

  const buildCategories = () => {
    const newCategories: Record<string, CategoryEntry[]> = {};

    Object.keys(articles).forEach((path) => {
      const [category] = path.split('/');
      if (!newCategories[category]) {
        newCategories[category] = [];
      }

      const { postName, title } = articles[path].attributes;
      if (postName !== 'sample') {
        const href = `${import.meta.env.BASE_URL}${path}`;
        newCategories[category].push({ title, href });
      }
    });

    setCategories(newCategories);
  };

  useEffect(() => {
    buildCategories();
  }, []);

  const handleTabMouseOver = (category: string) => {
    setHighlightedTab(category.toLowerCase());
  };

  const renderCategory = (category: string) => {
    return (
      <a
        key={category}
        className={classes.category}
        onMouseOver={() => handleTabMouseOver(category)}
      >
        {category}
      </a>
    );
  };

  const renderEntry = (entry: CategoryEntry) => {
    return (
      <li key={entry.href} className={classes.entry}>
        <a href={entry.href}>{entry.title}</a>
      </li>
    );
  };

  return (
    <div className={classes.root} onMouseLeave={() => setHighlightedTab('')}>
      <div className={classes.logo}>
        <a href={import.meta.env.BASE_URL}>
          <img alt="" src={logo} />
        </a>
      </div>
      <div className={classes.categories}>
        {Object.keys(categories).map(renderCategory)}
      </div>
      {highlightedTab && categories && (
        <div className={classes.panelContainer}>
          <ul className={classes.panel}>
            {categories[highlightedTab].map(renderEntry)}
          </ul>
        </div>
      )}
    </div>
  );
}