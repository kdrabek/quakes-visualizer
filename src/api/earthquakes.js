import { earthquakeApiUrl } from '../configs';
import { makeRequest } from './base';


const get = (date, minmagnitude) =>
  makeRequest(
    `${earthquakeApiUrl}/query`,
    {
      format: 'geojson',
      starttime: date,
      endtime: date,
      minmagnitude,
    },
  );

export default {
  get,
};
