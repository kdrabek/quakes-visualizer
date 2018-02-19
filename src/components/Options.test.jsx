import { shallow } from 'enzyme';
import Options from './Options';


describe('Options component', () => {
  const props = {};

  it('should match snapshot', () => {
    const wrapper = shallow(<Options {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
