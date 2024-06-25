import React from 'react'
import styled from 'styled-components'

import { Label, Radio, RadioGroup } from 'react-aria-components'

// khó style , nếu theo chiều direction,
//theo bản design không đc vì radio active thay đổi border

function MyRadioGroup({
	label,
	description,
	errorMessage,
	children,
	...props
}) {
	return (
		<Div>
			<RadioGroup {...props}>
				<Label>{label}</Label>
				{children}
			</RadioGroup>
		</Div>
	)
}

const Div = styled.div`
	& {
		.react-aria-RadioGroup {
		}

		.react-aria-Radio {
			display: flex;
			align-items: center;
			gap: 4px;
			forced-color-adjust: none;

			&:before {
				content: '';
				display: block;
				width: 14px;
				height: 14px;

				border: 1px solid;
				border-color: ${({ color, disabled }) =>
					disabled ? '#00000042' : color && color};
				border-radius: 50%;
			}

			&[data-selected] {
				&:before {
					border-width: 4px;
				}
			}
		}
	}
`
function RadioG() {
	return (
		<MyRadioGroup
			style={{
				fontSize: '20px',
				color: 'purple',
			}}
		>
			<Radio value="dogs">Dog</Radio>
			<Radio value="cats">Cat</Radio>
			<Radio value="dragon">Dragon</Radio>
		</MyRadioGroup>
	)
}

export default RadioG
