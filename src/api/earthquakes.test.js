import fetchMock from 'jest-fetch-mock';
import earthquakes from './earthquakes';

describe('(GET) earthquakes', () => {
  global.fetch = fetchMock;

  it('called with proper parameters', async () => {
    const mockedResp = { data: 'some api data' };
    const mock = fetch.mockResponse(JSON.stringify(mockedResp), { status: 200 });

    const resp = await earthquakes.get('2018-02-20', '2018-02-21', 5);

    expect(resp.toJS()).toEqual(mockedResp);
    expect(mock.mock.calls).toMatchSnapshot();
  });
});
