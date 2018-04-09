import React from 'react';
import Immutable from 'immutable';
import { shallow } from 'enzyme';

import {
  OptionsContainer, mapStateToProps, mapDispatchToProps,
} from './Options';

describe('(Container) Options', () => {
  const state = Immutable.Map();

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
    const wrapper = shallow(<OptionsContainer {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
