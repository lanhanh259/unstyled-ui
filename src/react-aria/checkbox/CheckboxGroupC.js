import React from 'react'
import { Checkbox, CheckboxGroup, Label } from 'react-aria-components'
import styled from 'styled-components'
import { MyCheckbox } from './CheckboxC'

function MyCheckboxGroup({ label, color, children, ...props }) {
	return (
		<Div color={color}>
			<CheckboxGroup {...props}>
				{label}
				{children}
			</CheckboxGroup>
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
function CheckboxGroupC() {
	return (
		<div>
			<MyCheckboxGroup
				label="Favorite sports"
				defaultValue={['soccer', 'baseball']}
				color="green"
				// style={{ color: 'purple', fontSize: '30px' }}
				onChange={(value) => {
					console.log('onChange', value)
				}}
			>
				<MyCheckbox color="blue" value="soccer">
					Soccer
				</MyCheckbox>
				<MyCheckbox value="baseball">Baseball</MyCheckbox>
				<MyCheckbox value="basketball">Basketball</MyCheckbox>
			</MyCheckboxGroup>

			{/* <MyCheckboxGroup isDisabled>
				<MyCheckbox value="soccer">Soccer</MyCheckbox>
				<MyCheckbox value="baseball">Baseball</MyCheckbox>
			</MyCheckboxGroup> */}
		</div>
	)
}

export default CheckboxGroupC
