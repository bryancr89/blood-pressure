import React, { PropTypes } from 'react';
import Header from './Header/Header';
import Menu from '../containers/MenuContainer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
