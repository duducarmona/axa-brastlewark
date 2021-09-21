import { useState } from "react";

const Searcher = ({setFilterGnomes}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInput = (e) => {
    setSearchValue(e.target.value);
    setFilterGnomes(e.target.value);
  };

  return <input id='searchValue' type='text' name='searchValue' value={searchValue} onChange={handleInput} placeholder='Search'></input>
};

export default Searcher;