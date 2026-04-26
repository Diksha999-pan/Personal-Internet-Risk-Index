const Suggestions = ({ passwordStrength, reuseCount, wifiUsage }) => {
  const getSuggestions = () => {
    const suggestions = []
    if (passwordStrength < 7) {
      suggestions.push('Use complex passwords with uppercase, lowercase, numbers, and symbols')
    }
    if (reuseCount > 3) {
      suggestions.push('Avoid reusing passwords across multiple accounts')
    }
    if (wifiUsage > 2) {
      suggestions.push('Minimize use of public Wi-Fi networks')
    }
    suggestions.push('Enable two-factor authentication (2FA) on all accounts')
    suggestions.push('Use a reputable password manager')
    suggestions.push('Regularly update your software and security patches')
    return suggestions
  }

  return (
    <div className="suggestions">
      <h3>Recommended Actions</h3>
      <ul>
        {getSuggestions().map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  )
}

export default Suggestions