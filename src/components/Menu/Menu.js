
import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory } from 'react-router';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
    this.goToHistory = this.goToHistory.bind(this);
    this.goToHome = this.goToHome.bind(this);
  }

  goTo(url) { 
    browserHistory.push(url);
    this.props.actions.closeMenu();
  }

  goToHistory() {
    this.goTo('/history');
  }

  goToHome() {
    this.goTo('/');
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.status}
          onRequestChange={this.props.actions.closeMenu}
        >
          <MenuItem onTouchTap={this.goToHome}>Home</MenuItem>
          <MenuItem onTouchTap={this.goToHistory}>History</MenuItem>
        </Drawer>
      </div>
    );
  }
}

Menu.propTypes = {
  status: PropTypes.bool,
  actions: PropTypes.shape()
};