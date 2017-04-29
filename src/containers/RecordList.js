import {connect} from 'react-redux';
import RecordList from '../components/Records/RecordList';

function mapStateToProps(state) {
  return {
    records: state.records
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordList);