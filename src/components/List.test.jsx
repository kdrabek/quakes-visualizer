import Immutable from 'immutable';
import { shallow } from 'enzyme';
import List from './List';

const earthquakesList = Immutable.fromJS([
  {
    id: 'some-id',
    properties: { mag: 4, depth: 3.4 },
  },
]);

describe('List component', () => {
  it('should match snapshot when no earthquakes', () => {
    const props = {
      earthquakesList: Immutable.fromJS([]),
    };
    const wrapper = shallow(<List {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot earthquakesList', () => {
    const props = {
      earthquakesList,
      updateMap: () => {},
    };
    const wrapper = shallow(<List {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
