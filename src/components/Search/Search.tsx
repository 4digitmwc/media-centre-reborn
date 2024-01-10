import { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import Result, { ResultProps } from './Result/Result';
import classes from "./Search.module.scss";
import { getArticles } from 'utils/api';

interface SearchProps {
  categories: string[];
  // results: string[];
  // onSearch: (input: string) => void;
  // onCountry: (input: string) => void;
  // onCategory: (input: string) => void;
}

export default ({ categories }: SearchProps) => {
  const [search, setSearch] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [result, setResult] = useState<ResultProps[]>([])

  const handleSearchChange = (e: React.BaseSyntheticEvent) => {
    setSearch(e.target.value || "")
  }

  const handleCategoryChange = (_: any, newValue: string | null) => { 
    setCategory(newValue || "") 
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getArticles({ query: search, category });
        setResult(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
  
    fetchData();
  }, [search, category])

  return (
    <div className="container">
      <div className={classes.root}>
        <div className={classes.search}>
          <TextField id="search" type="search" label="Search..." variant="outlined" onChange={handleSearchChange} />
        </div>
        <div className={classes.category}>
          <Autocomplete id="category" options={categories} onChange={handleCategoryChange} renderInput={params => <TextField {...params} label="Categories" />} />
        </div>
        <div className={classes.results}>
          {
            result.map((article: ResultProps) => <Result {...article} />)
          }
        </div>
      </div>
    </div>
  );
}



















