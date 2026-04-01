import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#ff6a00', fontFamily: 'monospace' }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>// ERREUR SYSTÈME</div>
          <div style={{ color: '#888', fontSize: '0.9rem' }}>Une erreur inattendue s'est produite. Rechargez la page.</div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
