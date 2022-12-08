import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { NavList } from '~/interfaces';

import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  list: NavList[];
}

function Navigation({ list }: PropsType) {
  return (
    <div className={cx('wrapper')}>
      <nav className={cx('wrapper-nav')}>
        {list.map((nav) => {
          return (
            <NavLink
              key={nav.id}
              to={nav.link}
              className={(nav) => {
                console.log('nav ->', nav);

                return cx('nav-item', { active: nav.isActive });
              }}
            >
              {nav.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}

export default Navigation;
