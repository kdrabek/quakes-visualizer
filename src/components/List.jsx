import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import './List.css';

const formatFromTimestamp = timestamp => moment(timestamp).format('DD-MM-YYYY HH:mm');

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
    this.props.updateMap(panel);  //eslint-disable-line
  };

  prepareRow(e) {
    const id = e.get('id');
    const properties = e.get('properties');
    const { expanded } = this.state;
    return (
      <div>
        <ExpansionPanel expanded={expanded === id} onChange={this.handleChange(id)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{formatFromTimestamp(properties.get('time'))}</Typography>
            &nbsp;
            <Typography>{properties.get('place')}</Typography>
            &nbsp;
            <Typography>{properties.get('mag')}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }

  render() {
    const { earthquakesList } = this.props;  //eslint-disable-line

    return (
      <div className="list">
        { earthquakesList.map(e => this.prepareRow(e)) }
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,  //eslint-disable-line
};

export default ControlledExpansionPanels;
