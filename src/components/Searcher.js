import { useState } from 'react';
import './Searcher.css';

const Searcher = ({ setFilterGnomes }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleInput = e => {
		setSearchValue(e.target.value);
		setFilterGnomes(e.target.value);
	};

	return (
		<div className="Searcher">
			<input
				className="Searcher-text"
				id="searchValue"
				type="text"
				name="searchValue"
				value={searchValue}
				onChange={handleInput}
				placeholder="Search"
			></input>
		</div>
	);
};

export default Searcher;
