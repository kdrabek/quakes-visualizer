import Immutable from 'immutable';

export const mockedResponse = {
  status: 200,
  data: {
    type: 'FeatureCollection',
    metadata: {
      generated: 1521989257000,
      url: 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&minmagnitude=5',
      title: 'USGS Earthquakes',
      status: 200,
      api: '1.5.8',
      count: 2,
    },
    features: [
      {
        type: 'Feature',
        properties: {
          mag: 6.5,
          place: '32km W of Sola, Vanuatu',
          time: 1388592209000,
          updated: 1394151955000,
          tz: 660,
          url: 'https://earthquake.usgs.gov/earthquakes/eventpage/usc000lvb5',
          detail: 'https://earthquake.usgs.gov/fdsnws/event/1/query?eventid=usc000lvb5&format=geojson',
          felt: null,
          cdi: null,
          mmi: 4.84,
          alert: 'green',
          status: 'reviewed',
          tsunami: 1,
          sig: 650,
          net: 'us',
          code: 'c000lvb5',
          ids: ',at00myqcls,pt14001000,usc000lvb5,',
          sources: ',at,pt,us,',
          types: ',cap,geoserve,impact-link,losspager,moment-tensor,moment-tensor,moment-tensor,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,',
          nst: null,
          dmin: 3.997,
          rms: 0.76,
          gap: 14,
          magType: 'mww',
          type: 'earthquake',
          title: 'M 6.5 - 32km W of Sola, Vanuatu',
        },
        geometry: {
          type: 'Point',
          coordinates: [167.249, -13.8633, 187],
        },
        id: 'usc000lvb5',
      },
    ],
    bbox: [120.2389, -13.8633, 10.07, 167.249, 19.0868, 187],
  },
};
const get = jest.fn(async () => Immutable.fromJS(mockedResponse.data));

export default {
  get,
};
