import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Dashboard.module.scss'

const cx = classNames.bind(styles)

function Dashboard() {
    return ( 
        <div className={cx('wrapper')} >
            <section className={cx('header')}>
                <h1>
                    Dashboard
                </h1>
            </section>

            <section className={cx('content')}>
                <div className={cx("col-lg-3 col-sm-6 col-xs-12")}>
                    <div className={cx('small-box bg-aqua')}>
                        <div className={cx('inner')}>
                            <h3>
                                150,000
                                <sup className={cx('sub-title')}>VNĐ</sup>
                            </h3>
                            <p>Số tiền đã nạp</p>
                        </div>
                        <NavLink to={"/History"} className={cx('small-box-btn')}>
                            <FontAwesomeIcon icon={faArrowCircleRight} className={cx('pdl4')} />
                        </NavLink>
                    </div>
                </div>
                <div className={cx("col-lg-3 col-sm-6 col-xs-12")}>
                    <div className={cx('small-box bg-purple')}>
                        <div className={cx('inner')}>
                            <h3>
                                1,200
                                <sup className={cx('sub-title')}>VNĐ</sup>
                            </h3>
                            <p>Số dư hiện tại</p>
                        </div>
                        <NavLink to={"/History"} className={cx('small-box-btn')}>
                            <FontAwesomeIcon icon={faArrowCircleRight} className={cx('pdl4')} />
                        </NavLink>
                    </div>
                </div>
                <div className={cx("col-lg-3 col-sm-6 col-xs-12")}>
                    <div className={cx('small-box bg-yellow')}>
                        <div className={cx('inner')}>
                            <h3>
                                391
                            </h3>
                            <p>Số yêu cầu đã tạo</p>
                        </div>
                        <NavLink to={"/Request"} className={cx('small-box-btn')}>
                            <FontAwesomeIcon icon={faArrowCircleRight} className={cx('pdl4')} />
                        </NavLink>
                    </div>
                </div>
                <div className={cx("col-lg-3 col-sm-6 col-xs-12")}>
                    <div className={cx('small-box bg-red')}>
                        <div className={cx('inner')}>
                            <h3>
                                0
                            </h3>
                            <p>Số tin nhắn báo sai</p>
                        </div>
                        <NavLink to={"/Request"} className={cx('small-box-btn')}>
                            <FontAwesomeIcon icon={faArrowCircleRight} className={cx('pdl4')} />
                        </NavLink>
                    </div>
                </div>
            </section>

        </div>    
     );
}

export default Dashboard;