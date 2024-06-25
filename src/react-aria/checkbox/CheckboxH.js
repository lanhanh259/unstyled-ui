import React, { useState } from 'react'
import { useCheckbox } from 'react-aria'
import { useToggleState } from 'react-stately'
import styled from 'styled-components'

function Checkbox(props) {
	let { children } = props
	let state = useToggleState(props) // { isSelected, setSelected, toggle }

	let ref = React.useRef(null)
	let { inputProps } = useCheckbox(props, state, ref)

	console.log('state', state)

	return (
		<Label style={{ display: 'inline-block' }}>
			<input {...inputProps} ref={ref} />
			{children}
		</Label>
	)
}

function CheckboxH(props) {
	let [selected, setSelection] = useState(false)

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Checkbox>Unsubscribe</Checkbox>
			<Checkbox defaultSelected>defaultSelected</Checkbox>
			<Checkbox isDisabled>isDisabled</Checkbox>
			<>
				<Checkbox isSelected={selected} onChange={setSelection}>
					Subscribe
				</Checkbox>
				<p>{`You are ${selected ? 'subscribed' : 'unsubscribed'}`}</p>
			</>
		</div>
	)
}

export default CheckboxH

const Label = styled.label`
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
