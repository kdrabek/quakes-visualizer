import moment from 'moment';
import { earthquakeApiUrl } from '../configs';
import { makeRequest } from './base';


const get = (date, minmagnitude) => {
  const startTime = moment(date).startOf('day');
  const endTime = moment(date).endOf('day');
  return makeRequest(
    `${earthquakeApiUrl}/query`,
    {
      format: 'geojson',
      starttime: startTime.toJSON(),
      endtime: endTime.toJSON(),
      minmagnitude,
    },
  );
};

export default {
  get,
};
