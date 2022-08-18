import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/welcome" activeClassName={styles.active}>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName={styles.active}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;


// 후손 선택자, 자손 선택자 공부해보기(css)

// NavLink 의 activeClassName으로 우리가 어디에 위치해있는지 알 수 있음.


