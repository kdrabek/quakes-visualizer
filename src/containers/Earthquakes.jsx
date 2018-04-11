import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle, branch, renderComponent } from 'recompose';
import { CircularProgress } from 'material-ui/Progress';

import handler from '../handlers/earthquake';
import List from '../components/List';


const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired,
  earthquakes: ImmutablePropTypes.list,
};

export const Earthquakes = ({ earthquakes, actions }) => (
  <List
    earthquakesList={earthquakes}
    updateMap={actions.updateMap}
  />
);

Earthquakes.propTypes = propTypes;
Earthquakes.displayName = 'Earthquakes';

export function mapStateToProps(state, props) {
  return {
    earthquakes: state.getIn(['earthquakes', 'data']),
    mapCoords: state.get('mapCoords'),
    ...props,
  };
}

export function mapDispatchToProps(dispatch) {
  const boundActions = bindActionCreators({ ...handler.actions }, dispatch);
  return { actions: boundActions };
}

export default compose(  //eslint-disable-line
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.actions.getEarthquakes(new Date(), 5);
    },
  }),
  branch(  //eslint-disable-line
    ({ earthquakes }) => earthquakes.pending,
    renderComponent(CircularProgress),
  ),  //eslint-disable-line
)(Earthquakes);  //eslint-disable-line
