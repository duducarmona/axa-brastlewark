import './App.css';
import { useEffect, useState } from 'react';
import { getAllBrastlewark } from './services/apiClient';
import Searcher from './components/Searcher';
import Header from './components/Header';

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
			const { name, thumbnail } = gnome;

			return (
				<li key={index} className="App-item">
					<h2>{name}</h2>
					<img src={thumbnail} alt={name} className='character-image' />
				</li>
			);
		});
	};

	const handleSearch = textToFilter => {
		setFilterGnomesBy(textToFilter);
	};

	return (
		<div className="App">
      <Header />
			<div className="wrapper">
				<Searcher setFilterGnomes={handleSearch} />
				<ul className="list-no-decoration">{renderList()}</ul>
			</div>
		</div>
	);
}

export default App;
