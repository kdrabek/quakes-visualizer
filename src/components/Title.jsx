import { Typography } from 'material-ui';

import './Title.css';


const Title = props => (
  <div className="header">
    <div className="flex-container">
      <Typography variant="title" className="title" {...props} >
        earthquakes browser
      </Typography>
      <i className="fa fa-gitlab" />
    </div>
  </div>
);

export default Title;
