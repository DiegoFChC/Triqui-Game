import { useState } from 'react'
import './App.css'
import { Board } from './components/board'
import { TURNS } from './constants'
import { checkEndGame, checkTurn, checkWinnerFrom } from './logic/board'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index'
import confetti from 'canvas-confetti'
import { SquareTurn } from './components/squareTurn'
import { WinnerModal } from './components/WinnerModal'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    if (board[index]) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = checkTurn(turn)
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      resetGameStorage()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main>
      <h1>Triqui (Tic Tac Toe)</h1>
      <button className='resetButton' onClick={resetGame}>Reset del juego</button>
      <Board board={board} turn={turn} updateBoard={updateBoard} />
      <section className='turn'>
        <SquareTurn isActive={turn === TURNS.X}>{TURNS.X}</SquareTurn>
        <SquareTurn isActive={turn === TURNS.O}>{TURNS.O}</SquareTurn>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
