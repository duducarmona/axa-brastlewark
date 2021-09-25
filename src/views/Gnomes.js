import { useState } from 'react';
import Searcher from '../components/Searcher';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import './Gnomes.css';

const Gnomes = ({ brastlewark }) => {
	const [filterGnomesBy, setFilterGnomesBy] = useState('');

	const renderList = () => {
		const filteredList = brastlewark.filter(
			gnome => gnome.name.toLowerCase().indexOf(filterGnomesBy.toLowerCase()) >= 0
		);

		return filteredList.map((gnome, index) => {
			const { name, thumbnail, id } = gnome;

			return (
				<li key={index} className="Gnomes-item">
					<Link to={`/gnome/${id}`}>
						<h2>{name}</h2>
						<img src={thumbnail} alt={name} className="Gnomes-character-image" />
					</Link>
				</li>
			);
		});
	};

	const handleSearch = textToFilter => {
		setFilterGnomesBy(textToFilter);
	};

	return (
		<div>
			<Header title="Brastlewark" />
			<div className="Gnomes-wrapper">
				<Searcher setFilterGnomes={handleSearch} />
				<ul className="Gnomes-list">{renderList()}</ul>
			</div>
		</div>
	);
};

export default Gnomes;
