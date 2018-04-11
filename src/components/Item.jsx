import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import styles from './Item.css';

const cx = classNames.bind(styles);
const card = cx({ card: true });
const expand = cx({ expand: true });
const magnitudeAvatar = cx({ 'magnitude-avatar': true });
const listParent = cx({ 'list-parent': true });
const listChild = cx({ 'list-child': true });

const formatTimestamp = timestamp => moment(timestamp).format('LTS, L');

const propTypes = PropTypes && {
  properties: ImmutablePropTypes.map.isRequired,
  updateMap: PropTypes.func.isRequired,
};
const defaultProps = {};

const propertiesMapping = {
  alert: 'Alert',
  cdi: 'Intensity',
  depth: 'Depth',
  felt: 'Felt Reports',
  tsunami: 'Tsunami',
  type: 'Type',
};

export class Item extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => this.setState({ expanded: !this.state.expanded });

  render() {
    const { properties } = this.props;
    const buttonClassName = classNames(expand, { 'expand-open': this.state.expanded });
    return (
      <Card className={card}>
        <CardHeader
          avatar={
            <Avatar className={magnitudeAvatar}>{properties.get('mag')}</Avatar>
          }
          action={
            <IconButton
              className={buttonClassName}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
            >
              <ExpandMoreIcon />
            </IconButton>
          }
          title={properties.get('place')}
          subheader={formatTimestamp(properties.get('time'))}
          onClick={() => this.props.updateMap(this.props.id)}
        />
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className={listParent}>
              {
                Object.entries(propertiesMapping).map((pair) => {
                  const [prop, descr] = pair;
                  return (
                    <div className={listChild} key={`${this.props.id}-${prop}`}>
                      <Typography align="center">{properties.get(prop) || 'no info'}</Typography>
                      <Typography variant="caption" gutterBottom align="center">{descr}</Typography>
                    </div>
                  );
                })
              }
            </div>

            <Typography align="right">
              Report link: <a href={properties.get('url')}>{properties.get('url')}</a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Item.displayName = 'Item';
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
