import { useState } from 'react'
import './App.css'
import Shield from './components/Shield'
import RiskMeter from './components/RiskMeter'
import InputCard from './components/InputCard'
import Suggestions from './components/Suggestions'

function App() {
  const [passwordStrength, setPasswordStrength] = useState(5)
  const [reuseCount, setReuseCount] = useState(0)
  const [wifiUsage, setWifiUsage] = useState(1) // 1=Low, 2=Medium, 3=High

  const riskScore = Math.min(((reuseCount * 5 + wifiUsage * 20) / (passwordStrength + 1)) * 10, 100)
  const riskLevel = riskScore < 33 ? 'Low' : riskScore < 66 ? 'Medium' : 'High'

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>Personal Internet Risk Index</h1>
          <p>Evaluate your cybersecurity posture</p>
        </header>

        <Shield riskLevel={riskLevel} />

        <RiskMeter score={riskScore} />

        <InputCard
          passwordStrength={passwordStrength}
          setPasswordStrength={setPasswordStrength}
          reuseCount={reuseCount}
          setReuseCount={setReuseCount}
          wifiUsage={wifiUsage}
          setWifiUsage={setWifiUsage}
        />

        <Suggestions
          passwordStrength={passwordStrength}
          reuseCount={reuseCount}
          wifiUsage={wifiUsage}
        />
      </div>
    </div>
  )
}

export default App
