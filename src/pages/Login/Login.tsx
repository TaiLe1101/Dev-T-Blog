import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
  const [toggleLogin, setToggleLogin] = useState(true);

  return (
    <div className={cx('wrapper')}>
      <input type="checkbox" id="chk" checked={toggleLogin} aria-hidden="true" className={cx('chk')} />
      <div className={cx('register')}>
        <div className={cx('form-group')}>
          <label
            onClick={() => {
              setToggleLogin(!toggleLogin);
            }}
            htmlFor="chk"
          >
            Register
          </label>
          <input type="text" name="firstName" id="firstName" className={cx('form-control')} placeholder="Họ và tên lót" />
          <input type="text" name="lastName" id="lastName" className={cx('form-control')} placeholder="Tên" />
          <input type="text" name="userName" id="userName" className={cx('form-control')} placeholder="Tên đăng nhập" />
          <input type="password" name="password" id="password" className={cx('form-control')} placeholder="Mật khẩu" />
          <Button className={cx('btn')}>Đăng ký</Button>
        </div>
      </div>
      <div className={cx('log-in')}>
        <div className={cx('form-group')}>
          <label
            onClick={() => {
              setToggleLogin(!toggleLogin);
            }}
            htmlFor="chk"
          >
            Log in
          </label>
          <input type="text" name="userName" id="userName" className={cx('form-control')} placeholder="Tên đăng nhập" />
          <input type="password" name="password" id="password" className={cx('form-control')} placeholder="Mật khẩu" />
          <Button className={cx('btn')}>Đăng nhập</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
