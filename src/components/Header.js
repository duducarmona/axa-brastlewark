import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
	return (
		<div className="Header">
			{window.location.pathname !== '/' && (
				<div className="arrow-icon-container">
					<Link to="/">
						<i className="material-icons arrow-icon">arrow_back_ios_new</i>
					</Link>
				</div>
			)}

			<h1>{title}</h1>
		</div>
	);
};

export default Header;
