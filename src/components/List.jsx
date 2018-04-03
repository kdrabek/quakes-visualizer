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
  constructor(props) {
    super(props);
    this.state = { expanded: null };
    this.handleChange.bind(this);
  }

  handleChange = panel => (event, expanded) => {
    this.setState({ expanded: expanded ? panel : false });
    this.props.updateMap(panel);  //eslint-disable-line
  };

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
                handleChange={this.handleChange}
                expanded={this.state.expanded === id}
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
