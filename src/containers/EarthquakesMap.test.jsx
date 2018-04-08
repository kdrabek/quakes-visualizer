/* eslint-disable import/first */
jest.mock('../api/earthquakes');
import React from 'react';
import Immutable from 'immutable';
import { shallow } from 'enzyme';

import {
  EarthquakesMap, mapStateToProps, mapDispatchToProps,
} from './EarthquakesMap';

describe('(Container) Options', () => {
  const state = Immutable.fromJS({
    earthquakes: {
      data: {},
    },
  });

  const initialProps = mapStateToProps(state);
  const initialActions = mapDispatchToProps(p => p);
  const props = { ...initialActions, ...initialProps };

  it('has right props', () => {
    expect(initialProps).toMatchSnapshot();
  });


  it('has right actions', () => {
    expect(initialActions).toMatchSnapshot();
  });

  it('should render', () => {
    const wrapper = shallow(<EarthquakesMap {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
