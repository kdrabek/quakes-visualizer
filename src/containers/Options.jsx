import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import handler from '../handlers/earthquake';
import Options from '../components/Options';

const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired,
  earthquakes: ImmutablePropTypes.list,
};

export class OptionsContainer extends PureComponent {
  render() {
    return <Options handleOnClick={this.props.actions.getEarthquakes} />;
  }
}

OptionsContainer.propTypes = propTypes;
OptionsContainer.displayName = 'OptionsContainer';

export function mapStateToProps(state, props) {
  return { ...props };
}

export function mapDispatchToProps(dispatch) {
  const boundActions = bindActionCreators({ ...handler.actions }, dispatch);
  return { actions: boundActions };
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
