import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ListItem from './Item';

import styles from './List.css';

const cx = classNames.bind(styles);
const className = cx({
  main: true,
});


class ControlledExpansionPanels extends React.Component {
  render() {
    const { earthquakesList } = this.props;  //eslint-disable-line

    return (
      <div className={className}>
        {
          earthquakesList.isEmpty() ?
          'No Events Found' :
          earthquakesList.map((earthquake) => {
            const id = earthquake.get('id');
            return (
              <ListItem
                id={id}
                properties={earthquake.get('properties')}
                updateMap={this.props.updateMap}  //eslint-disable-line
              />
            );
          })
        }
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,  //eslint-disable-line
};

export default ControlledExpansionPanels;
