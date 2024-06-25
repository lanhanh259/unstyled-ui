import React from 'react'
import { Checkbox } from 'react-aria-components'
import styled from 'styled-components'

export const MyCheckbox = ({ children, color, ...props }) => {
	return (
		<Div color={color}>
			<Checkbox {...props}>
				<div className="checkbox">
					<svg viewBox="0 0 18 18" aria-hidden="true">
						<polyline points="1 9 7 14 15 4" />
					</svg>
				</div>
				{children}
			</Checkbox>
		</Div>
	)
}

const Div = styled.div`
	.react-aria-Checkbox {
		display: flex;
		align-items: center;
		gap: 4px;
		font-size: 1.143rem;
		forced-color-adjust: none;

		.checkbox {
			width: 14px;
			height: 14px;
			border: 1px solid;
			border-color: ${({ color, disabled }) =>
				disabled ? '#00000042' : color && color};
			border-radius: 4px;
			transition: all 200ms;

			display: flex;
			align-items: center;
			justify-content: center;
		}

		svg {
			stroke: ${({ color, disabled }) =>
				disabled ? '#00000042' : color ? color : '#000'};

			width: 1rem;
			height: 1rem;
			fill: none;
			stroke-width: 3px;
			stroke-dasharray: 22px;
			stroke-dashoffset: 66;
			transition: all 200ms;
		}

		&[data-selected] {
			svg {
				stroke-dashoffset: 44;
			}
		}
		&[data-disabled] {
			color: #00000042;

			.checkbox {
				border-color: #00000042;
			}
		}
	}
`

function CheckboxC(props) {
	return (
		<div>
			<MyCheckbox isDisabled>Disabled</MyCheckbox>

			<MyCheckbox
				defaultSelected
				onChange={(isSelected) => {
					console.log('onChange', isSelected)
				}}
			>
				{' '}
				defaultSelected
			</MyCheckbox>
			<MyCheckbox color="green">color</MyCheckbox>
			<MyCheckbox style={{ color: 'purple', fontSize: '30px' }}>
				style
			</MyCheckbox>
		</div>
	)
}

export default CheckboxC
