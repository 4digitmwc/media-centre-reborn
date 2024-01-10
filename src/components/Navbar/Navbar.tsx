import { useState, useEffect } from 'react';
import logo from 'assets/images/wiki_banner_2.webp';
import classes from './Navbar.module.scss';
import { IArticleJSON } from 'interfaces/interfaces';

interface NavbarProps {
  articles: IArticleJSON[];
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

    articles.forEach((article: IArticleJSON) => {
      const {category, week, title} = article
      if (!newCategories[category]) {
        newCategories[category] = [];
      }

      const href = `${import.meta.env.BASE_URL}/${category}/${week}`;
        newCategories[category].push({ title, href });
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
          <img alt="" src={logo} style={{width: "12%", height:"12%", display: "block", margin: "auto"}} />
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