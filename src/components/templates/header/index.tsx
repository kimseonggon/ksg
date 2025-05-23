import styles from './style.module.scss';
import LinkComponent from '../../atoms/link/index';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.img}>
          <img src="./ksg.jpeg" alt="이미지" />
        </div>
        <span>고니프로젝트</span>
      </div>
      <div className={styles.right}>
        <nav>
          <LinkComponent label='첫 화면' to='/' />
          <LinkComponent label='자기소개' to='/me' />
          <LinkComponent label='UI' to='/ui' />
          <LinkComponent label='프로젝트' to='/project' />
        </nav>
      </div>
    </div>
  );
};

export default Header;