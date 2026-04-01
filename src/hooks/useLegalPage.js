import { useState } from 'react'
import { useClock } from './useClock'

export function useLegalPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const clock = useClock()

  function toggle(i) {
    setOpenIndex(prev => prev === i ? null : i)
  }

  const openCount = openIndex !== null ? 1 : 0

  return { openIndex, toggle, openCount, clock }
}
