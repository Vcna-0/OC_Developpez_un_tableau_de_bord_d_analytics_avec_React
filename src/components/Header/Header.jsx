import React from 'react'
import Logo from "../../assets/Logo-header.svg"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={ styles.header }>
      <nav>
        <ul className={ styles.navigation }>
          <li><img className= { styles.logo } src={ Logo } alt="Kasa" /></li>
          <li><a href="Accueil">Accueil</a></li>
          <li><a href="Profil">Profil</a></li>
          <li><a href="Réglages">Réglages</a></li>
          <li><a href="Communauté">Communauté</a></li>
        </ul>
      </nav>
    </header>
  )
}
