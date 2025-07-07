import viteLogo from './assets/react.svg'
import reactLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="card-glass">
        <div className="logos">
          <img src={viteLogo} alt="Vite" className="logo vite" />
          <img src={reactLogo} alt="React" className="logo react" />
        </div>

        <h1>🚀 Deployed with <span className="highlight">CI/CD</span></h1>
        <p className="author">by <span className="name">Jitesh Bhakat</span></p>
        <p className="footer">⚡ Powered by <strong>Vite</strong> + <strong>React</strong></p>
      </div>
    </div>
  )
}

export default App
