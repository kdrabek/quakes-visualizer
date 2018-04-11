import { shallow } from 'enzyme';
import Title from './Title';


describe('Title component', () => {
  const props = {
    text: 'some text',
    url: 'http://some.link',
  };

  it('should match snapshot', () => {
    const wrapper = shallow(<Title {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
