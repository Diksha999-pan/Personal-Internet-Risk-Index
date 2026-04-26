const Shield = ({ riskLevel }) => {
  const getColor = () => {
    switch (riskLevel) {
      case 'Low': return '#22c55e'
      case 'Medium': return '#f59e0b'
      default: return '#ef4444'
    }
  }

  return (
    <div className="shield-container">
      <div className="shield" style={{ color: getColor() }}>
        🛡️
      </div>
      <h2 className="risk-level">{riskLevel} Risk</h2>
    </div>
  )
}

export default Shield