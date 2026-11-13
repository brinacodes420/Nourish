
import { useState } from 'react'
import WelcomePage from './pages/WelcomePage'
import OnboardingPage from './pages/OnboardingPage'
import LoginPage from './pages/LoginPage'
import NutriBalance from './pages/NutriBalance'

type Page = 'welcome' | 'onboarding' | 'login' | 'dashboard'

function App() {
  const [page, setPage] = useState<Page>('welcome')

  switch (page) {
    case 'onboarding':
      return (
        <OnboardingPage
          onBack={() => setPage('welcome')}
          onComplete={() => setPage('dashboard')}
        />
      )

    case 'login':
      return (
        <LoginPage
          onBack={() => setPage('welcome')}
        />
      )

    case 'dashboard':
      return <NutriBalance />

    default:
      return (
        <WelcomePage
          onGetStarted={() => setPage('onboarding')}
          onLogin={() => setPage('login')}
        />
      )
  }
}

export default App
