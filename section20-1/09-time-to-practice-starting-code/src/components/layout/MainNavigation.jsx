import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Great Quotes</div>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink to='/quotes' activeClassName={styles.active}>All Quotes</NavLink></li>
                    <li><NavLink to='/new-quote' activeClassName={styles.active}>Add a Quote</NavLink></li>
                </ul>                
            </nav>
        </header>
    );  
};

export default MainNavigation;

// 활성 상태인 경우 특정 css 클래스도 가져오는 NavLink가 좋음.
// css active 자세히 뭔지 학습하기