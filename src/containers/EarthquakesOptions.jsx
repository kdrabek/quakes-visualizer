import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import handler from '../handlers/earthquake';
import OptionsComponent from '../components/Options';

const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired,
  earthquakes: ImmutablePropTypes.list,
};
const defaultProps = {};

export const OptionsContainer = ({ actions }) => (
  <OptionsComponent handleChange={actions.getEarthquakes} />
);

export function mapStateToProps(state, props) {
  return { ...props };
}

export function mapDispatchToProps(dispatch) {
  const boundActions = bindActionCreators({ ...handler.actions }, dispatch);
  return { actions: boundActions };
}

OptionsContainer.propTypes = propTypes;
OptionsContainer.displayName = 'OptionsContainer';
OptionsContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
