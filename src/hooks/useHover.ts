import React, { cloneElement, useState } from 'react'

export type Element =
	| ((state: boolean) => React.ReactElement)
	| React.ReactElement

const useHover = (element: Element): [React.ReactElement, boolean] => {
	const [state, setState] = useState(false)

	const onMouseEnter = (originalOnMounseEnter?: any) => (e: any) => {
		originalOnMounseEnter?.(e)
		setState(true)
	}
	const onMouseLeave = (originalOnMouseLeave?: any) => (e: any) => {
		originalOnMouseLeave?.(e)
		setState(false)
	}
	if (typeof element === 'function') {
		element = element(state)
	}
	const el = cloneElement(element, {
		onMouseEnter: onMouseEnter(element.props?.onMouseEnter),
		onMouseLeave: onMouseLeave(element.props?.onMouseLeave),
	})
	return [el, state]
}

export default useHover
