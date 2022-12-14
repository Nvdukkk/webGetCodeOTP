import classNames from 'classnames/bind';


import styles from './Header.module.scss'
import HeaderNavbar from './HeaderNavbar';

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <a href ="/Request" className={cx('logo-brand')}>NvdukkCode</a>
            
            <div className={cx('header-custom-menu')}>
                
                <div className={cx('header-run-in-text')}>
                    <marquee >
                        Mọi hành vi cố tình chọn sai dịch vụ để lọc tài khoản của khách sẽ bị khóa tài khoản vĩnh viễn.
                    </marquee>
                </div>
                
                
            </div>

            <HeaderNavbar />
        </header>
     );
}

export default Header;