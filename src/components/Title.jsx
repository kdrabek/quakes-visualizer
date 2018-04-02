import IconButton from 'material-ui/IconButton';
import { Typography } from 'material-ui';

import './Title.css';


const Title = props => (
  <div className="header">
    <div className="flex-container">
      <Typography variant="title" {...props} >
        {props.text}
      </Typography>
      <span className="avatar">
        <IconButton
          variant="fab"
          href={props.href}
        >
          <i className="fa fa-gitlab" />
        </IconButton>
      </span>
    </div>
  </div>
);

export default Title;
