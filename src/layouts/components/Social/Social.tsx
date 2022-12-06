import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Social.module.scss';

const cx = classNames.bind(styles);

interface PropsType {}

function Social({}: PropsType) {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className={cx('social-inner')}>
          <a target="_blank" href="https://www.facebook.com/TaiLe1101" rel="noreferrer">
            <FontAwesomeIcon className={cx('icon')} icon={faFacebookF} />
          </a>
          <a target="_blank" href="https://www.facebook.com/TaiLe1101" rel="noreferrer">
            <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
          </a>
          <a target="_blank" href="https://www.instagram.com/tai_leeeee/" rel="noreferrer">
            <FontAwesomeIcon className={cx('icon')} icon={faInstagram}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
