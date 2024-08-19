export function SquareTurn ({ children, isActive }) {
  const className = `SquareTurn ${isActive ? 'active' : ''}`

  return <div className={className}>{children}</div>
}
