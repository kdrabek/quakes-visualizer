import React from 'react';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import './Item.css';


const formatFromTimestamp = timestamp =>
  moment(timestamp).format('DD-MM-YYYY HH:mm');


const propTypes = PropTypes && {
  expanded: PropTypes.bool.isRequired,
  properties: ImmutablePropTypes.map.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
const defaultProps = {};


const Item = (props) => {
  const {
    id, properties, expanded, handleChange,
  } = props;
  return (
    <div>
      <ExpansionPanel expanded={expanded} onChange={handleChange(id)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{formatFromTimestamp(properties.get('time'))}</Typography>
          &nbsp;
          <Typography>{properties.get('place')}</Typography>
          &nbsp;
          <Typography>{properties.get('mag')}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ul>
              <li>Alert: {properties.get('alert')}</li>
              <li>Intensity: {properties.get('cdi')}</li>
              <li>Depth: {properties.get('depth')}</li>
              <li>Felt Reports Number: {properties.get('felt')}</li>
              <li>Tsunami: {properties.get('tsunami')}</li>
              <li>Type: {properties.get('type')}</li>
              <li>Report: {properties.get('url')}</li>
            </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

Item.displayName = 'Item';
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
export default Item;
