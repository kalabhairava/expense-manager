import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" component={App} exact />
			<Route path="/create" component={Dummy} />
			<Route component={PageNotFound} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

function Dummy(props) {
	return <p> Boom </p>;
}

function PageNotFound() {
	return <div>Page not found.</div>;
}
