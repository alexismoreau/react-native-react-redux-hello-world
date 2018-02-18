import React from 'react';
import PropTypes from 'prop-types';

export default class HelloWorld extends React.Component {
  render() {
    const { onClick, color } = this.props;
    return (
      <div className="hello-world" onClick={onClick} style={{ color }}>Hello World</div>
    );
  }
}

HelloWorld.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
