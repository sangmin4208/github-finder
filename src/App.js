import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'
import Alert from './components/layout/Alert'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3">
              <Alert />
              <Routes />
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
