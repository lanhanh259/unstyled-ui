import * as Checkbox from '@radix-ui/react-checkbox'
import React, { useId, useState } from 'react'
import styled from 'styled-components'

// custom phải sinh ra id

export const MyCheckbox = ({ children, color, ...props }) => {
	const id = useId()

	return (
		<Div color={color} disabled={props?.disabled}>
			<Checkbox.Root id={id} className="CheckboxRoot" {...props}>
				<Checkbox.Indicator className="CheckboxIndicator">
					<svg
						className="custom-checkbox-icon"
						viewBox="0 0 14 14"
						fill="none"
						stroke="red"
					>
						<path
							d="M3 8L6 11L11 3.5"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className="Label" htmlFor={id}>
				{children}
			</label>
		</Div>
	)
}

function CheckboxBase() {
	const [enabed1, setEnabled1] = useState(false)
	const [enabed2, setEnabled2] = useState(false)

	return (
		<div>
			<MyCheckbox
				color="blue"
				checked={enabed1}
				onCheckedChange={(e) => {
					setEnabled1(!enabed1)
				}}
			>
				CheckboxBase
			</MyCheckbox>

			<MyCheckbox
				color="blue"
				disabled
				checked={enabed2}
				onCheckedChange={(e) => {
					setEnabled2(!enabed2)
				}}
			>
				CheckboxBase
			</MyCheckbox>
		</div>
	)
}

export default CheckboxBase

const Div = styled.div`
	& {
		display: flex;
		align-items: center;
		color: ${({ disabled }) => disabled && '#00000042'};

		.CheckboxRoot {
			width: 14px;
			height: 14px;
			display: flex;
			align-items: center;
			justify-content: center;

			border: 1px solid;
			border-radius: 4px;
			border-color: ${({ color, disabled }) =>
				disabled ? '#00000042' : color ? color : '#f5a122'};
			background: transparent;

			.CheckboxIndicator {
				display: flex;
				align-items: center;
				justify-content: center;
				svg {
					width: 12px;
					height: 12px;
					stroke: ${({ color, disabled }) =>
						disabled ? '#00000042' : color ? color : '#f5a122'};
				}
			}
		}
	}

	.Label {
		padding-left: 4px;
	}
`
