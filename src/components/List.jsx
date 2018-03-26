import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';


class ControlledExpansionPanels extends React.Component {
  prepareRow(e) {
    console.log(this.props);
    return (
      <div>
        <ExpansionPanel expanded={false}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{e.get('id')}</Typography>
            <Typography>I am an expansion panel</Typography>
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

    return <div>{ earthquakesList.map(e => this.prepareRow(e)) }</div>;
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,  //eslint-disable-line
};

export default ControlledExpansionPanels;
