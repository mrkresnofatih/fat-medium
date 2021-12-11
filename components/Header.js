import React from 'react';
import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Link href={"/"}>
                <h1 className={styles.headerLogo}>Fatmedium</h1>
            </Link>
            <div/>
        </div>
    );
};

export default Header;