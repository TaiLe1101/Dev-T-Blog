import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface PropsType {
  primary?: boolean;
  solid?: boolean;
  className?: string;
  children: string;
}

function Button({ primary = true, solid = false, className = '', children }: PropsType) {
  const classes = cx('btn', {
    primary,
    solid,
    [className]: className,
  });

  return (
    <div className={cx('wrapper')}>
      <button className={classes}>
        <Link to={routes.homePage} className={cx('content')}>
          {children}
        </Link>
      </button>
    </div>
  );
}

export default Button;
