import fetchMock from 'jest-fetch-mock';
import earthquakes from './earthquakes';

describe('(GET) earthquakes', () => {
  global.fetch = fetchMock;

  it('called with proper parameters', async () => {
    const mock = fetch.mockResponse(JSON.stringify({}), { status: 200 });

    const date = new Date('2018-03-21');
    await earthquakes.get(date, 5);

    expect(mock.mock.calls).toMatchSnapshot();
  });
});
