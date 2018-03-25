import { Typography } from 'material-ui';

import './Title.css';


const Title = props => (
  <Typography className="header" variant="title" color="inherit" {...props} >
    Earthquake Visualizer
  </Typography>
);

export default Title;
