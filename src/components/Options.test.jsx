import { shallow } from 'enzyme';
import Options from './Options';

jest.mock('moment', () => () => '2018–04–09T12:34:56+00:00');

describe('Options component', () => {
  const props = {};

  it('should match snapshot', () => {
    const wrapper = shallow(<Options {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
