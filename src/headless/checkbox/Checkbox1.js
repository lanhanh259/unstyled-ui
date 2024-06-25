import { Checkbox, Field, Label } from '@headlessui/react'
import { useState } from 'react'
import styled from 'styled-components'

function Example(props) {
	const {
		id,
		className,
		style,
		color,
		disabled,
		asField,
		// checked,
		// onChange,
		children,
		...otherProps
	} = props

	const [enabled, setEnabled] = useState(false)

	return (
		<Div
			id={id}
			className={className}
			style={style}
			color={color}
			disabled={disabled}
			{...otherProps}
		>
			<Field className="custom-checkbox-field" as={asField}>
				<Checkbox
					className="custom-checkbox-container"
					checked={enabled}
					onChange={setEnabled}
					disabled={disabled}
				>
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
				<Label className="custom-checkbox-label ">{children}</Label>
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
	return (
		<div>
			<Example>check box</Example>
			<Example disabled>disabled</Example>
			<Example color="green">color</Example>
			<Example style={{ fontSize: '30px', color: 'purple' }}>
				Label
			</Example>
		</div>
	)
}

export default Checkbox1
