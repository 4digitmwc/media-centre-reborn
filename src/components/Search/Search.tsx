import { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import Result, { ResultProps } from './Result/Result';
import classes from "./Search.module.scss";
import { getArticles } from 'utils/api';

interface SearchProps {
  countries: string[];
  categories: string[];
  // results: string[];
  // onSearch: (input: string) => void;
  // onCountry: (input: string) => void;
  // onCategory: (input: string) => void;
}

export default ({ countries, categories }: SearchProps) => {
  const [search, setSearch] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [result, setResult] = useState<ResultProps[]>([])

  const handleSearchChange = (e: React.BaseSyntheticEvent) => {
    setSearch(e.target.value || "")
  }

  const handleCategoryChange = (e: React.BaseSyntheticEvent) => {
    setCategory(e.target.value || "")
  }

  const handleCountryChange = (e: React.BaseSyntheticEvent) => {
    setCountry(e.target.value || "")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getArticles({ query: search, country, category });
        console.log(articles)
        setResult(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
  
    fetchData();
  }, [search, category, country])

  return (
    <div className="container">
      <div className={classes.root}>
        <div className={classes.search}>
          <TextField id="search" type="search" label="Search..." variant="outlined" onChange={handleSearchChange} />
        </div>
        <div className={classes.country}>
          <Autocomplete id="country" options={countries} renderInput={params => <TextField {...params} label="Country" onChange={handleCountryChange} />} />
        </div>
        <div className={classes.category}>
          <Autocomplete id="category" options={categories} renderInput={params => <TextField {...params} label="Categories" onChange={handleCategoryChange} />} />
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



















