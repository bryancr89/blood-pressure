import React, { PropTypes } from 'react';
import moment from 'moment';
import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

const getRank = (pressure) => {
  if (pressure.systolic <= 120 && pressure.diastolic <= 80) {
    return 'green';
  }
  if (pressure.systolic < 140 && pressure.diastolic < 90) {
    return 'yellow';
  }
  return 'red';
};

const RecordList = ({ records }) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      >
      {records.map((record, index) => {
        const color = getRank(record);
        const now = moment();
        const recordDate = moment(record.date);
        const humanDate = recordDate.from(now);
        const pulsations = record.pulsations && <span> - <b>{record.pulsations}</b></span>;
        return (
          <GridTile
            key={index}
            title={humanDate}
            subtitle={<span><b>{record.systolic}</b>/<b>{record.diastolic}</b>{pulsations}</span>}
            style={({
              background: color
            })}
            />
        );
      }
      )}
    </GridList>
    {records.length === 0 && 'Oops there are no records yet!.'}
  </div>
);

RecordList.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    systolic: PropTypes.number.isRequired,
    diastolic: PropTypes.number.isRequired,
    pulsations: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    rank: PropTypes.number
  }).isRequired).isRequired
};

export default RecordList;