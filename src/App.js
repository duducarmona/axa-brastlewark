import './App.css';
import { useEffect, useState } from 'react';
import { getAllBrastlewark } from './services/apiClient';
import Searcher from './components/Searcher';

function App() {
	const [brastlewark, setBrastlewark] = useState([]);
	const [filterGnomesBy, setFilterGnomesBy] = useState('');

	useEffect(() => {
		loadData();
	}, []);

	const loadData = () => {
		getAllBrastlewark()
			.then(({ data }) => {
				setBrastlewark(data.Brastlewark);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const renderList = () => {
		const filteredList = brastlewark.filter(
			gnome => gnome.name.toLowerCase().indexOf(filterGnomesBy.toLowerCase()) >= 0
		);

		return filteredList.map((gnome, index) => {
			return <li key={index}>{gnome.name}</li>;
		});
	};

  const handleSearch = textToFilter => {
    setFilterGnomesBy(textToFilter);
  };

	return (
		<div className="App">
			<h1>Brastlewark</h1>
      <Searcher setFilterGnomes={handleSearch} />
			<ul>{renderList()}</ul>
		</div>
	);
}

export default App;
