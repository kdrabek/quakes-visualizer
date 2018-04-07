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
  componentDidMount() {
    this.props.actions.getEarthquakes(new Date(), 5);
  }

  render() {
    const { pending } = this.props.earthquakes;
    const comp = pending ?
      <CircularProgress /> :
      (<List
        earthquakesList={this.props.earthquakes}
        updateMap={this.props.actions.updateMap}
      />);
    return comp;
  }
}

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
  return {
    actions: boundActions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Earthquakes);
