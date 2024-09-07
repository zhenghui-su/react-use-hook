import { useCallback, useEffect, useRef } from 'react'

const useTimeout = (fn: () => void, delay?: number) => {
	const fnRef = useRef(fn)

	fnRef.current = fn

	const timeRef = useRef<number>()

	const clear = useCallback(() => {
		if (timeRef.current) {
			clearTimeout(timeRef.current)
		}
	}, [])

	useEffect(() => {
		timeRef.current = setTimeout(() => fnRef.current(), delay)

		return clear
	}, [delay])

	return clear
}
export default useTimeout
