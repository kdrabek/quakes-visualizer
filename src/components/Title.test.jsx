import { shallow } from 'enzyme';
import Title from './Title';


describe('Title component', () => {
  const props = {};

  it('should match snapshot', () => {
    const wrapper = shallow(<Title {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
