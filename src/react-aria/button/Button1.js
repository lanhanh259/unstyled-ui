import React, { useRef } from 'react'
import { useButton } from 'react-aria'
import styled from 'styled-components'
import { useToggleState } from 'react-stately'
import { useCheckbox } from 'react-aria'

function Checkbox(props) {
	let { children } = props
	let state = useToggleState(props)
	let ref = React.useRef(null)
	let { inputProps } = useCheckbox(props, state, ref)

	return (
		<label style={{ display: 'inline-block' }}>
			<input {...inputProps} ref={ref} />
			{children}
		</label>
	)
}

function MyButton(props) {
	let ref = useRef()
	let { buttonProps } = useButton(props, ref)
	let { children } = props

	return (
		<div>
			<button {...buttonProps} ref={ref}>
				{children}
			</button>
			<Div></Div>
		</div>
	)
}

function Button1(props) {
	return (
		<div>
			<Checkbox>Unsubscribe</Checkbox>
			<MyButton>hello</MyButton>
			<Div></Div>
		</div>
	)
}

export default Button1
const Div = styled.div`
	.react-aria-Button {
		background: pink;

		border: 1px solid pink;
		border-radius: 4px;
		appearance: none;
		/* vertical-align: middle; */
		font-size: 1rem;
		text-align: center;
		outline: none;
		padding: 6px 10px;

		&[data-pressed] {
			background: green;
		}

		/* &[data-focus-visible] {
			background: blue;
			outline: 2px solid blue;
			outline-offset: -1px;
		} */
	}
`
