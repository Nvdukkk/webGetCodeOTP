import Content from './Content/content';
import classNames from 'classnames/bind';
import styles from './History.module.scss'

const cx = classNames.bind(styles)

function History() {
    return ( 
        <div className={cx('wrapper')}>
            <section>
                <Content />
            </section>
        </div>
     );
}

export default History;