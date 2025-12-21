import React from 'react'
import styles from './SideMenu.module.css'
import iconMuscu from '../../assets/icon_muscu.svg'
import iconPiscine from '../../assets/icon_piscine.svg'
import iconVelo from '../../assets/icon_velo.svg'
import iconYoga from '../../assets/icon_yoga.svg'
import SideMenuButton from '../SideMenuButton/SideMenuButton'

export default function SideMenu(){
  const items = [
    { alt: 'Yoga', src: iconYoga },
    { alt: 'Natation', src: iconPiscine },
    { alt: 'Vélo', src: iconVelo },
    { alt: 'Musculation', src: iconMuscu }
  ]

  return (
    <aside className={styles.sidebar} aria-label="Navigation principale">
      <div className={styles.buttons}>
        {items.map((it, idx) => (
          <SideMenuButton key={idx} item={it}/>
        ))}
      </div>

      <div className={styles.copyright}>
        <span>Copyright, SportSee 2020</span>
      </div>
    </aside>
  )
}
