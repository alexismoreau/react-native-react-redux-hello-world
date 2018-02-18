import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import StockInsights from './App';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <StockInsights />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
