import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import { toggleColor } from '../../actions/actions';

/** The app entry point */
class OuiTeamWebApp extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div className="react-native-web">
        <Header />
        <HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
      </div>
    );
  }
}

OuiTeamWebApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(OuiTeamWebApp);
