import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Containers from './containers/';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<Containers />
	</ApolloProvider>,
	document.getElementById('root')
);

registerServiceWorker();