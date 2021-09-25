import { useEffect, useState } from 'react';
import Header from '../components/Header';
import './GnomeDetail.css';

const GnomeDetail = props => {
	const [gnome, setGnome] = useState([]);
	const { brastlewark } = props;

	useEffect(() => {
		if (brastlewark.length > 0) {
			setGnome(brastlewark[props.match.params.id]);
		}
	}, [brastlewark, props.match.params.id]);

	const { thumbnail, name, age, hair_color, professions, friends } = gnome;
	let { weight, height } = gnome;

	const round2dec = num => {
		return Math.round(num * 100) / 100;
	};

	weight = round2dec(weight);
	height = round2dec(height);

	return (
		<div className="GnomeDetail">
			<Header title="Gnome Detail" />
			<div className="GnomeDetail-wrapper">
				<h2>{name}</h2>
				<img className="GnomeDetail-img" src={thumbnail} alt={name} />
				<div className="GnomeDetail-wrapper-characteristics">
					<div>
						<p>
							<b>Age:</b> {age}
						</p>
						<p>
							<b>Hair color:</b> {hair_color}
						</p>
					</div>
					<div>
						<p>
							<b>Weight:</b> {weight}
						</p>
						<p>
							<b>Height:</b> {height}
						</p>
					</div>
				</div>
				<div className="GnomeDetail-wrapper-lists">
					{professions && (
						<div className="GnomeDetail-wrapper-small-list">
							<p>
								<b>Professions:</b>
							</p>
							<ul>
								{professions.map((profession, index) => {
									return <li key={index}>{profession}</li>;
								})}
							</ul>
						</div>
					)}
					<div className="GnomeDetail-wrapper-small-list">
						{friends && (
							<ul>
								<p>
									<b>Friends:</b>
								</p>
								{friends.map((friend, index) => {
									return <li key={index}>{friend}</li>;
								})}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default GnomeDetail;
