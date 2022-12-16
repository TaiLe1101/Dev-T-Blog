import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import configs from '~/configs';

import styles from './Social.module.scss';
import SocialItem from '~/components/SocialItem';
import { CurrentUser as ICurrentUser } from '~/interfaces';
import CurrentUser from '~/components/CurrentUser';

const cx = classNames.bind(styles);

interface TypePropsSocial {
  currentUser: ICurrentUser;
}

function Social({ currentUser }: TypePropsSocial) {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className={cx('wrapper-control')}>
          <div className={cx('social-inner')}>
            <SocialItem
              href="https://www.facebook.com/TaiLe1101"
              icon={<FontAwesomeIcon className={cx('icon')} icon={faFacebookF} />}
              target="_blank"
              rel="noreferrer"
            ></SocialItem>
            <SocialItem
              href="https://www.facebook.com/TaiLe1101"
              icon={<FontAwesomeIcon className={cx('icon')} icon={faTwitter} />}
              target="_blank"
              rel="noreferrer"
            ></SocialItem>
            <SocialItem
              href="https://www.instagram.com/tai_leeeee/"
              icon={<FontAwesomeIcon className={cx('icon')} icon={faInstagram} />}
              target="_blank"
              rel="noreferrer"
            ></SocialItem>
          </div>

          <div className={cx('login-inner')}>
            {Object.keys(currentUser).length > 0 ? (
              <CurrentUser avatar="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/289853738_131107569601219_5348593235064342389_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=H9KnGjh7DfkAX_AOU-n&_nc_oc=AQl-POpSsTSzvQa7hxL_YGfNIgfv6q35YNKYvqBX9FCuAThFL3k1ggEjNHXDjzxbnaY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfD_7sTxe-6ONL0zIet37ZSp6jvX4XH5mFZ_75jTLoFUrQ&oe=63A0E5E9"></CurrentUser>
            ) : (
              <SocialItem to={configs.routes.login} icon={<FontAwesomeIcon className={cx('icon')} icon={faUser} />}></SocialItem>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
