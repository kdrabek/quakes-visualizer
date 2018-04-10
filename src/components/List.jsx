import React from 'react';
import { PropTypes } from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames/bind';
import { branch, renderComponent } from 'recompose';

import ListItem from './Item';

import styles from './List.css';

const cx = classNames.bind(styles);
const className = cx({ main: true });

const propTypes = PropTypes && {
  earthquakesList: ImmutablePropTypes.list.isRequired,
  updateMap: PropTypes.func.isRequired,
};
const defaultProps = {};

const Empty = () => (<div>No events found</div>);

const List = ({ earthquakesList, updateMap }) => (
  <div className={className}>
    {
      earthquakesList.map(earthquake => (
        <ListItem
          id={earthquake.get('id')}
          properties={earthquake.get('properties')}
          updateMap={updateMap}  //eslint-disable-line
        />
      ))
    }
  </div>
);

List.displayName = 'List';
List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default branch(
  ({ earthquakesList }) => earthquakesList.isEmpty(),
  renderComponent(Empty),
)(List);
