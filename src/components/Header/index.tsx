import SignInButton from '../SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import ActiveLink from '../ActiveLink';

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ig.news' />
        <nav>
          <ActiveLink activeClass={styles.active} href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClass={styles.active} href='/posts'>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
