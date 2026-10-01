import { Component, type ReactNode } from 'react'
// Keeps the page alive if WebGL is unavailable: the 3D orb is decoration only.
export default class OrbBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? null : this.props.children }
}
