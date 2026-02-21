import { useUser } from '../../contexts/UserContext'
import styles from './Error404.module.css'

function Error404() {
  const { apiError, setApiError, setUseMock } = useUser()

  const handleUseMock = () => {
    setApiError(null)
    setUseMock(true)
  }

  const handleRetry = () => {
    setApiError(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.title}>Service indisponible</h2>
        <p className={styles.message}>
          {apiError || "Impossible de se connecter au serveur. L'API n'est peut-etre pas demarree."}
        </p>
        <div className={styles.actions}>
          <button className={styles.buttonPrimary} onClick={handleRetry}>
            Reessayer
          </button>
          <button className={styles.buttonSecondary} onClick={handleUseMock}>
            Utiliser les donnees de demo
          </button>
        </div>
        <p className={styles.hint}>
          Assurez-vous que le serveur backend est demarre sur <code>localhost:3000</code>
        </p>
      </div>
    </div>
  )
}

export default Error404
