import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import ActionDone from 'material-ui/svg-icons/action/done';
import { cyan300, cyan500, white } from 'material-ui/styles/colors';
import avatar from '../../images/blood-pressure.png';

const initValues = {
  systolic: '',
  diastolic: '',
  pulsations: '',
  date: {},
  rank: 0
};

class AddRecord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...initValues};

    this.addRecord = this.addRecord.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  addRecord() {
    this.props.onAddRecord(this.state);
    this.setState(initValues);
  }

  onChange(event) {
    const {name, value, type} = event.target;
    this.setState({
      [name]: type === 'number' ? +value : value
    });
  }

  onDateChange(event, date) {
    this.setState({
      date
    });
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="New record"
          subtitle="My doctor's concerned about my high blood pressure. I told him next time don't leave me sitting in waiting room for two hours."
          avatar={avatar}
          />
        <CardText>
          <TextField
            autoFocus
            hintText="Systoric"
            type="number"
            fullWidth={true}
            floatingLabelText="Systoric"
            name="systolic"
            value={this.state.systolic}
            onChange={this.onChange}
            />
          <TextField
            hintText="Diastolic"
            type="number"
            fullWidth={true}
            floatingLabelText="Diastolic"
            name="diastolic"
            value={this.state.diastolic}
            onChange={this.onChange}
            />
          <TextField
            hintText="Pulsations"
            type="number"
            fullWidth={true}
            floatingLabelText="Pulsations"
            name="pulsations"
            value={this.state.pulsations}
            onChange={this.onChange}
            />
          <DatePicker
            hintText="When"
            mode="landscape"
            fullWidth={true}
            autoOk={true}
            value={this.state.date}
            onChange={this.onDateChange}
            />
        </CardText>
        <CardActions>
          <FlatButton
            onClick={this.addRecord}
            backgroundColor={cyan500}
            hoverColor={cyan300}
            icon={<ActionDone color={white} />}
            />
        </CardActions>
      </Card>
    );
  }
}

AddRecord.propTypes = {
  onAddRecord: PropTypes.func.isRequired
};

export default connect()(AddRecord);