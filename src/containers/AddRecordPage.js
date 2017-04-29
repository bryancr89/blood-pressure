import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/recordActions';
import AddRecord from '../components/Records/AddRecord';

export const RecordsPage = (props) => {
  return (
    <AddRecord
      onAddRecord={props.actions.addRecord}
      />
  );
};

RecordsPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    records: state.records
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordsPage);