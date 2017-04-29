import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import * as actions from '../../actions/menuActions';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = (props) => {
  return (
  <AppBar
    title="Blood Pressure"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={props.actions.toggleMenu}
  />
); 
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps() {
  return { };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);