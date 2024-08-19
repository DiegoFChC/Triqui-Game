export function Square ({ children, index, turn, updateBoard }) {
  const className = `square ${children} ${
    children !== null ? 'is-selected' : ''
  }`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      <span className='placeHolder'>{turn}</span>
      {children}
    </div>
  )
}
