import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Social from '../Social';
import Navigation from '../Navigation';
import { navList } from './store';
import { useEffect, useState } from 'react';
import { CurrentUser } from '~/interfaces';

const cx = classNames.bind(styles);

function Header() {
  const [currentUser, setCurrentUser] = useState<CurrentUser>({});

  useEffect(() => {
    setTimeout(() => {
      setCurrentUser({ firstName: 'Lê Trần Tấn', lastName: 'Tài', id: '1', userName: 'admin' });
    }, 2000);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <Social currentUser={currentUser} />
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
