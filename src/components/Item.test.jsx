import Immutable from 'immutable';
import { shallow } from 'enzyme';
import { mockedResponse } from '../api/__mocks__/earthquakes';
import ListItem, { Item } from './Item';

const feature = mockedResponse.data.features[0];

describe('Item component', () => {
  it('should match snapshot when collapsed', () => {
    const props = {
      properties: Immutable.fromJS(feature.properties),
      id: Immutable.fromJS(feature.id),
      updateMap: () => {},
    };

    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when expanded', () => {
    const props = {
      properties: Immutable.fromJS(feature.properties),
      id: Immutable.fromJS(feature.id),
      updateMap: () => {},
      classes: { },
    };

    const wrapper = shallow(<Item {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
