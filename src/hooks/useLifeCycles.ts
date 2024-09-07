import { useEffect } from 'react'

const useLifeCycles = (mount: () => void, unmount?: () => void) => {
	useEffect(() => {
		if (mount) {
			mount()
		}

		return () => {
			if (unmount) {
				unmount()
			}
		}
	}, [])
}
export default useLifeCycles
