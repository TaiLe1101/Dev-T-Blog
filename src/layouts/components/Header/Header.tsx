import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Social from '../Social';
import Navigation from '../Navigation';
import { navList } from './store';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <Social />
      <div className="container">
        <div className="header-inner">
          <h1 className={cx('title')}>Dev T</h1>
          <Navigation list={navList} />
        </div>
      </div>
    </div>
  );
}

export default Header;
