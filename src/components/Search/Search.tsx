import { TextField, Autocomplete } from '@mui/material';
import Result from './Result/Result';
import classes from "./Search.module.scss";

interface SearchProps {
  countries: string[];
  categories: string[];
  // TODO:
  // results: string[];
  // onSearch: (input: string) => void;
  // onCountry: (input: string) => void;
  // onCategory: (input: string) => void;
}

export default ({ countries, categories }: SearchProps) => {
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <TextField id="search" type="search" label="Search..." variant="outlined" />
      </div>
      <div className={classes.country}>
        <Autocomplete id="country" options={countries} renderInput={params => <TextField {...params} label="Country" />} />
      </div>
      <div className={classes.category}>
        <Autocomplete id="category" options={categories} renderInput={params => <TextField {...params} label="Categories" />} />
      </div>
      <div className={classes.results}>
        {/* Existing Result elements */}
        <Result href="#" title="Title 1" subtitle="Subtitle 1 teehee" />
        <Result href="#" title="Title 2" subtitle="Subtitle 2 teehee" />
        <Result href="#" title="Title 3" subtitle="Subtitle 3 teehee" />
        <Result href="#" title="Title 4" subtitle="Subtitle 4 teehee" />
        <Result href="#" title="Title 5" subtitle="Subtitle 5 teehee" />

        {/* New elements */}
        <div className={classes.title}>New Title</div>
        <div className={classes.description}>Some description goes here.</div>
        <button className={classes.button}>Click Me</button>
      </div>
    </div>
  );
}
