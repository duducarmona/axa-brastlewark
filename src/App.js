import './App.css';
import { Switch, Route } from 'react-router-dom';
import GnomeDetail from './views/GnomeDetail';
import Gnomes from './views/Gnomes';
import { useEffect, useState } from 'react';
import { getAllBrastlewark } from './services/apiClient';

function App() {
	const [brastlewark, setBrastlewark] = useState([]);

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

	return (
		<div className="App">
			<Switch>
				<Route exact path={'/'} render={props => <Gnomes {...props} brastlewark={brastlewark} />} />
				<Route exact path={'/gnome/:id'} render={props => <GnomeDetail {...props} brastlewark={brastlewark} />} />
			</Switch>
		</div>
	);
}

export default App;
