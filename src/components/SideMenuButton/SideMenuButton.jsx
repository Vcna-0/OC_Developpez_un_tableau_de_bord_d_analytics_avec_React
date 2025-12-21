import React from 'react'
import styles from './SideMenuButton.module.css'

export default function SideMenuButton({ item }) {
  return (
    <button className={styles.iconBtn} aria-label={item.alt}>
      <img src={item.src} alt="" />
    </button>
  )
}
