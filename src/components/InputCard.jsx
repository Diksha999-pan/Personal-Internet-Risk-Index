const InputCard = ({
  passwordStrength,
  setPasswordStrength,
  reuseCount,
  setReuseCount,
  wifiUsage,
  setWifiUsage
}) => {
  const getPasswordBars = () => {
    const bars = []
    for (let i = 1; i <= 10; i++) {
      bars.push(
        <div
          key={i}
          className={`password-bar ${i <= passwordStrength ? 'active' : ''}`}
          onClick={() => setPasswordStrength(i)}
        ></div>
      )
    }
    return bars
  }

  const getChecklistStatus = (value, threshold, invert = false) => {
    const isGood = invert ? value <= threshold : value >= threshold
    return isGood ? '✔' : '⚠'
  }

  return (
    <div className="input-card">
      <h3>Security Assessment</h3>
      <div className="checklist">
        <div className="checklist-item">
          <span className="status">{getChecklistStatus(passwordStrength, 7)}</span>
          <span>Strong Password</span>
          <div className="password-strength">
            {getPasswordBars()}
          </div>
        </div>
        <div className="checklist-item">
          <span className="status">{getChecklistStatus(reuseCount, 3, true)}</span>
          <span>Low Password Reuse</span>
          <input
            type="number"
            min="0"
            max="10"
            value={reuseCount}
            onChange={(e) => setReuseCount(Number(e.target.value))}
            className="number-input"
          />
        </div>
        <div className="checklist-item">
          <span className="status">{getChecklistStatus(wifiUsage, 2, true)}</span>
          <span>Limited Public Wi-Fi</span>
          <div className="wifi-toggle">
            <button
              className={wifiUsage === 1 ? 'active' : ''}
              onClick={() => setWifiUsage(1)}
            >
              Low
            </button>
            <button
              className={wifiUsage === 2 ? 'active' : ''}
              onClick={() => setWifiUsage(2)}
            >
              Medium
            </button>
            <button
              className={wifiUsage === 3 ? 'active' : ''}
              onClick={() => setWifiUsage(3)}
            >
              High
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputCard