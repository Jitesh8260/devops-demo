import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      background: '#f4f4f5'
    }}>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem' }}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" width={100} />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" width={100} />
        </a>
      </div>

      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>
        🚀 Deployed with CI/CD
      </h1>

      <h2 style={{ fontWeight: 'normal', marginTop: '0.5rem', color: '#666' }}>
        by <span style={{ color: '#007acc' }}>Jitesh Bhakat</span>
      </h2>

      <p style={{ marginTop: '1rem', color: '#888' }}>
        This app is powered by <strong>Vite + React</strong>
      </p>
    </div>
  )
}

export default App
