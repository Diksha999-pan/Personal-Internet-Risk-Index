const RiskMeter = ({ score }) => {
  const percentage = Math.min(score, 100)

  const getColor = () => {
    if (percentage < 33) return '#22c55e'
    if (percentage < 66) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <div className="risk-meter">
      <div className="meter-label">
        <span>Risk Score</span>
        <span className="score">{Math.round(percentage)}</span>
      </div>
      <div className="meter-bar">
        <div
          className="meter-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: getColor()
          }}
        ></div>
      </div>
    </div>
  )
}

export default RiskMeter