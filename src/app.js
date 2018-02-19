import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Link to="/create"> Create </Link>
			<Route path="/" component={App} exact />
			<Route path="/create" component={Dummy} />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

function Dummy(props) {
	return <p> Boom </p>;
}
