import { SquareTurn } from './squareTurn'

export function WinnerModal ({ resetGame, winner }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó'

  return (
    <section className='modal'>
      <div className='container'>
        <h2>{winnerText}</h2>

        <header>
          <SquareTurn isActive>{winner !== false ? winner : ':|'}</SquareTurn>
        </header>

        <footer>
          <button className='resetButton' onClick={resetGame}>
            Empezar de nuevo
          </button>
        </footer>
      </div>
    </section>
  )
}
