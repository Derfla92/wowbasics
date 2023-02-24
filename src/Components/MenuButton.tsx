import React, { ReactNode } from 'react'
import styles from "./MenuButton.module.css"

type MenuButtonProps = {
    children: ReactNode
}

const MenuButton = (props: MenuButtonProps) => {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default MenuButton