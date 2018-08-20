import React, { Component } from 'react';

// import TradingView from '../components/TradingView'
import Timelines from '../components/Timelines'
import HighStock from '../components/HighStock'

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_BLOCKS = gql`
  {
    getHistoricalBlockchainData(
      symbol: "BTC",
      timeRange: {
        from: "2018-01-09T02:54:25Z",
        to: "2018-01-19T02:54:25Z"
      }
    ) {
      timestamp
      blockCount
    }
  }
`

class Containers extends Component {
  render() {
    return (
    	<div>
	    	<HighStock />
	    	<Query query={GET_BLOCKS}>
		    	{({ loading, error, data }) => {
		    		if (loading) return null;
		    		if (error) return `Error!: ${error}`

	    			return (
	    				<Timelines data={data.getHistoricalBlockchainData} />
    				)
		    	}}
	      </Query>
      </div>
    );
  }
}

export default Containers;
