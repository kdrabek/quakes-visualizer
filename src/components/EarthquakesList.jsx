import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
});

function DetailedExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    here be the list
    </div>
  );
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired, //eslint-disable-line
};

export default withStyles(styles)(DetailedExpansionPanel);
