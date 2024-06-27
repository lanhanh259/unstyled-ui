import { Checkbox, Field, Label } from '@headlessui/react'
import { useState } from 'react'
import styled from 'styled-components'

function MyCheckbox(props) {
	const {
		id,
		className,
		style,
		color,

		asField,
		children,
		...otherProps
	} = props

	return (
		<Div
			id={id}
			className={className}
			style={style}
			color={color}
			disabled={otherProps?.disabled}
		>
			<Field className="custom-checkbox-field">
				<Checkbox className="custom-checkbox-container" {...otherProps}>
					<svg
						className="custom-checkbox-icon"
						viewBox="0 0 14 14"
						fill="none"
					>
						<path
							d="M3 8L6 11L11 3.5"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</Checkbox>
				<Label className="custom-checkbox-label">{children}</Label>
			</Field>
		</Div>
	)
}

const Div = styled.div`
	color: ${({ disabled }) => disabled && '#00000042'};

	.custom-checkbox-field {
		display: flex;
		align-items: center;
	}
	.custom-checkbox-container {
		flex-shrink: 0;
		width: 14px;
		height: 14px;
		border: 1px solid;
		border-color: ${({ color, disabled }) =>
			disabled ? '#00000042' : color && color};
		border-radius: 4px;

		svg {
			stroke: ${({ color, disabled }) =>
				disabled ? '#00000042' : color ? color : '#000'};
			opacity: 0;
		}

		&:focus-visible {
			outline: none;
		}
		&[data-checked] {
			svg {
				opacity: 1;
			}
		}
	}
	.custom-checkbox-label {
		flex-shrink: 0;
		margin-left: 4px;
	}
`

function Checkbox1() {
	const [enabed1, setEnabled1] = useState(true)
	const [enabed2, setEnabled2] = useState(false)

	return (
		<div>
			<MyCheckbox disabled>disabled </MyCheckbox>
			<MyCheckbox color="blue" checked={enabed1} onChange={setEnabled1}>
				check box
			</MyCheckbox>
			<MyCheckbox color="green" checked={enabed2} onChange={setEnabled2}>
				check box
			</MyCheckbox>
		</div>
	)
}

export default Checkbox1
