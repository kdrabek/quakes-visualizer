import IconButton from 'material-ui/IconButton';
import classNames from 'classnames/bind';
import { PropTypes } from 'prop-types';
import { Typography } from 'material-ui';

import styles from './Title.css';

const cx = classNames.bind(styles);

const header = cx({ header: true, 'flex-container': true });
const avatar = cx({ avatar: true });
const gitlab = cx({ fa: true, 'fa-gitlab': true });

const propTypes = PropTypes && {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
const defaultProps = {};


const Title = ({ text, url }) => (
  <div className={header}>
    <Typography variant="title">
      {text}
    </Typography>
    <span className={avatar}>
      <IconButton variant="fab" href={url}>
        <i className={gitlab} />
      </IconButton>
    </span>
  </div>
);

Title.displayName = 'Title';
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
export default Title;
