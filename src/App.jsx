import styles from './App.module.css'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import Dashboard from './components/Dashboard/Dashboard'
import { UserProvider } from './contexts/UserContext'

function App() {
  return (
    <UserProvider>
      <div>
        <header className={styles.header}>
          <Header />
        </header>

        <main className={styles.main}>
          <SideMenu />
          <section className={styles.content}>
            <Dashboard />
          </section>
        </main>
      </div>
    </UserProvider>
  )
}

export default App
