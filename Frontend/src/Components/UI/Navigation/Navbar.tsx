import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <header className={styles.navbarHeader}>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <NavLink to='/' className={styles.logo}>
                GiftGlow
              </NavLink>
            </li>
            <li>
              <NavLink to='/cart'>
                <i
                  className='fa fa-shopping-cart'
                  aria-label='shopping-cart'
                ></i>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
