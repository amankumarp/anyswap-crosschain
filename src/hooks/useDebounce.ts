import { useEffect, useState } from 'react'

// modified from https://usehooks.com/useDebounce/
export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {

    // update canceled value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // cancel timeout if value changes (also on delayed change or unload)
    // This is how we prevent the update of the debdoff value when the value changes within the delay time. Timeout is cleared and restarted.
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
