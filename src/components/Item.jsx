import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import './Item.css';

const styles = theme => ({
  card: {
    'margin-bottom': '1rem',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    'font-size': '1rem',
  },
});

const formatFromTimestamp = timestamp =>
  moment(timestamp).format('DD-MM-YYYY HH:mm');

export class Item extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    const {
      properties,  //eslint-disable-line
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {properties.get('mag') }
            </Avatar>
          }
          action={
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
          title={properties.get('place')}
          subheader={formatFromTimestamp(properties.get('time'))}
          onClick={() => this.props.updateMap(this.props.id)}
        />
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className="list-parent">
              <div className="list-child">
                <Typography align="center">{properties.get('alert') || 'no info'}</Typography>
                <Typography variant="caption" gutterBottom align="center">Alert</Typography>
              </div>

              <div className="list-child">
                <Typography align="center">{properties.get('cdi') || 'no info'}</Typography>
                <Typography variant="caption" gutterBottom align="center">Intensity</Typography>
              </div>

              <div className="list-child">
                <Typography align="center">{properties.get('depth') || 'no info'}</Typography>
                <Typography variant="caption" gutterBottom align="center">Depth</Typography>
              </div>

              <div className="list-child">
                <Typography align="center">{properties.get('felt') || 'no info'}</Typography>
                <Typography variant="caption" gutterBottom align="center">Felt Reports</Typography>
              </div>

              <div className="list-child">
                <Typography align="center">{properties.get('tsunami') === 1 ? 'yes' : 'no' || 'no info'}</Typography>
                <Typography variant="caption" gutterBottom align="center">Tsunami</Typography>
              </div>

              <div className="list-child">
                <Typography align="center">{properties.get('type') || 'no info'}</Typography>
                <Typography variant="caption" gutterBottom align="center">Type</Typography>
              </div>
            </div>

            <Typography align="right">
              Report link: <a href="{properties.get('url')}">{properties.get('url')}</a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,  //eslint-disable-line
};

export default withStyles(styles)(Item);
