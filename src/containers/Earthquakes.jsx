import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from 'material-ui/Progress';
import handler from '../handlers/earthquake';
import List from '../components/List';

const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired,
  earthquakes: ImmutablePropTypes.list,
};

export class Earthquakes extends PureComponent {
  componentWillMount() {
    this.props.actions.getEarthquakes('2018-03-21', '2018-03-22', 5);
  }

  render() {
    if (this.props.earthquakes.pending) {
      return <CircularProgress />;
    }
    return <List earthquakesList={this.props.earthquakes} />;
  }
}

Earthquakes.propTypes = propTypes;
Earthquakes.displayName = 'Earthquakes';

export function mapStateToProps(state, props) {
  return {
    earthquakes: state.getIn(['earthquakes', 'data']),
    ...props,
  };
}

export function mapDispatchToProps(dispatch) {
  const boundActions = bindActionCreators({ ...handler.actions }, dispatch);
  return {
    actions: boundActions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Earthquakes);
