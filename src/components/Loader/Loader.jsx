import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Chargement des donnees...</p>
    </div>
  )
}

export default Loader
