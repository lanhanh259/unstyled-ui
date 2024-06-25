import * as Checkbox from '@radix-ui/react-checkbox'
import React, { useId, useState } from 'react'
import styled from 'styled-components'

// custom phải sinh ra id

export const MyCheckbox = ({
	checked,
	value,
	onChange = () => {},
	children,
	color,
	...props
}) => {
	const id = useId()
	const [enabled, setEnabled] = useState(checked)

	return (
		<Div color={color}>
			<Checkbox.Root
				className="CheckboxRoot"
				checked={enabled}
				onCheckedChange={(e) => {
					setEnabled(!enabled)
					onChange(value)
				}}
				id={id}
			>
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

function CheckboxRadix() {
	const handleChange = (e) => {
		console.log(e)
	}
	return (
		<Div>
			<MyCheckbox value>Checkbox</MyCheckbox>
			<div style={{ display: 'block' }}>
				<MyCheckbox
					color="green"
					value="green"
					checked={true}
					onChange={handleChange}
				>
					green
				</MyCheckbox>
				<MyCheckbox color="blue" value="blue" onChange={handleChange}>
					blue
				</MyCheckbox>
			</div>
		</Div>
	)
}

export default CheckboxRadix
const Div = styled.div`
	& {
		display: flex;
		align-items: center;

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

			svg {
				width: 12px;
				height: 12px;
				stroke: ${({ color, disabled }) =>
					disabled ? '#00000042' : color ? color : '#f5a122'};
				opacity: 1;
			}
		}
	}

	.Label {
		padding-left: 4px;
	}
`
