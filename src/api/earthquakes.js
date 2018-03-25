import { earthquakeApiUrl } from '../configs';
import { makeRequest } from './base';


const get = (startDate, endDate, minmagnitude) =>
  makeRequest(
    `${earthquakeApiUrl}/query`,
    {
      format: 'geojson',
      starttime: startDate,
      endtime: endDate,
      minmagnitude,
    },
  );

export default {
  get,
};
