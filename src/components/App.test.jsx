import { shallow } from 'enzyme';
import App from './App';


describe('App component', () => {
  const props = {};

  it('should match snapshot', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
