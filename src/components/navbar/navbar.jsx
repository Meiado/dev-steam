import React from 'react'
import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import { Logo } from '../logo/logo'
import { Input } from '../forms/input/input'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input placeHolder={"Buscar"} fullWidth />
      </div>
      <BsCart4 size={40} />
    </div>
  )
}
