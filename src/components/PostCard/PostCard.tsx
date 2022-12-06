import { faUser, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faMessage, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './PostCard.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import Button from '../Button';
import { PropsTypePostCard } from './interfaces';

const cx = classNames.bind(styles);

function PostCard({ image = '', dateTime, userName, titleImg, title, desc, swap = false }: PropsTypePostCard) {
  return (
    <div
      className={cx('wrapper', {
        swap,
      })}
    >
      <div className={cx('wrapper-img')}>
        <img className={cx('img-post')} src={image} alt="" />

        <Link to="/" className={cx('title-img')}>
          <FontAwesomeIcon className={cx('icon-title-img')} icon={faCircle}></FontAwesomeIcon>
          {titleImg}
        </Link>
      </div>

      <div className={cx('wrapper-content')}>
        <div className={cx('wrapper-info-tus')}>
          <div className={cx('info-tus')}>
            <FontAwesomeIcon className={cx('icon')} icon={faCalendar}></FontAwesomeIcon>
            <span className={cx('text')}>{dateTime}</span>
          </div>
          <div className={cx('info-tus')}>
            <FontAwesomeIcon className={cx('icon')} icon={faUser}></FontAwesomeIcon>
            <Link to="/id" className={cx('text')}>
              {userName}
            </Link>
          </div>

          <Tippy content="0 comment" theme={'dark'}>
            <button id="comment" className={cx('comment')}>
              <FontAwesomeIcon className={cx('icon-comment')} icon={faMessage}></FontAwesomeIcon>
            </button>
          </Tippy>
        </div>

        <h1 className="gradient-effect">
          <Link className={cx('link-title')} to={routes.homePage}>
            {title}
          </Link>
        </h1>

        <p className={cx('desc')}>{desc}</p>

        <Button className={cx('btn')}>Continue Reading</Button>
      </div>
    </div>
  );
}

export default PostCard;