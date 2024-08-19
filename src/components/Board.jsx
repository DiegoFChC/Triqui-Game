import { Square } from './square'

export function Board ({ board, turn, updateBoard }) {
  return (
    <section className='board'>
      {board.map((_, index) => {
        return <Square key={index} index={index} turn={turn} updateBoard={updateBoard}>{board[index]}</Square>
      })}
    </section>
  )
}
