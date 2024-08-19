import { useState } from "react";
import { TURNS } from "../constants";

export function useTurn ({ newTurn }) {
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const updateTurn = () => {
    setTurn(newTurn)
  }
  
  return { turn, updateTurn }
}
