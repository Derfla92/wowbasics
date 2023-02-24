import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo'
import MenuButton from './MenuButton'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftMenu}>
                <MenuButton>Help</MenuButton>
            </div>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.rightMenu}>
                <MenuButton>Ohno</MenuButton>
            </div>
        </div>
    )
}

export default Header