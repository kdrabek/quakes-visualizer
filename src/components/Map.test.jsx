import Immutable from 'immutable';
import { shallow } from 'enzyme';
import EnhancedMap, { Map } from './Map';

const coords = Immutable.fromJS({ lat: 12.34, lng: 34.21 });

describe('EnhancedMap component', () => {
  it('should match snapshot when coords not passed', () => {
    const props = {};
    const wrapper = shallow(<EnhancedMap {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when coords passed', () => {
    const props = { mapCoords: coords };
    const wrapper = shallow(<EnhancedMap {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Map component', () => {
  it('should match snapshot', () => {
    const props = {
      center: coords.toJS(),
      loadingElement: <div />,
      googleMapURL: 'https://maps.url.com',
    };
    const wrapper = shallow(<Map {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
