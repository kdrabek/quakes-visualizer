import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CircularProgress } from 'material-ui/Progress';
import handler from '../handlers/earthquake';
import List from '../components/List';
import Options from '../components/Options';


const propTypes = PropTypes && {
  actions: PropTypes.object.isRequired,
  earthquakes: ImmutablePropTypes.list,
};

export class Earthquakes extends PureComponent {
  componentDidMount() {
    this.props.actions.getEarthquakes(new Date(), 5);
  }

  handleOnClick = (date, magnitude) => {
    this.props.actions.getEarthquakes(date, magnitude);
  }

  render() {
    if (this.props.earthquakes.pending) {
      return (
        <div>
          <Options />
          <CircularProgress />
        </div>
      );
    }
    return (
      <div>
        <Options handleOnClick={this.handleOnClick} />
        <List earthquakesList={this.props.earthquakes} updateMap={this.props.actions.updateMap} />
      </div>
    );
  }
}

Earthquakes.propTypes = propTypes;
Earthquakes.displayName = 'Earthquakes';

export function mapStateToProps(state, props) {
  return {
    earthquakes: state.getIn(['earthquakes', 'data']),
    selected: state.get('selected'),
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
