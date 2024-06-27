import React from 'react'
import styled from 'styled-components'
import { Button } from '@headlessui/react'
import { Checkbox, Field, Label } from '@headlessui/react'

const BasicButton = styled(Button)`
	padding: 6px 20px;
	outline: none;
	vertical-align: middle;

	border: 1px solid;
	border-radius: 4px;

	&[data-disabled] {
		color: #00000042;
		border-color: #00000042;
	}
	&[data-hover] {
	}
`

const StyleField = styled(Field)`
	color: ${({ disabled }) => disabled && '#00000042'};
	display: inline-block;
	align-items: center;
	.theme-dark & {
		color: ${({ disabled }) => (disabled ? '#00000042' : '#fff')};
	}
`

const StyleCheckbox = styled(Checkbox)`
	display: inline-block;
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
		.theme-dark & {
			stroke: ${({ color, disabled }) =>
				disabled ? '#00000042' : color ? color : '#fff'};
		}
	}

	&:focus-visible {
		outline: none;
	}
	&[data-checked] {
		svg {
			opacity: 1;
		}
	}
`
const StyleLabel = styled(Label)`
	margin-left: 4px;
`

function BasicCheckbox(props) {
	const {
		id,
		className,
		style,

		asField,
		children,
		...otherProps
	} = props

	return (
		<StyleField
			id={id}
			className={className}
			style={style}
			color={otherProps?.color}
			disabled={otherProps?.disabled}
		>
			<StyleCheckbox {...otherProps}>
				<svg viewBox="0 0 14 14" fill="none">
					<path
						d="M3 8L6 11L11 3.5"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</StyleCheckbox>
			<StyleLabel>{children}</StyleLabel>
		</StyleField>
	)
}

function He() {
	return (
		<div>
			{/* <div className="theme-dark" style={{ background: '#000' }}> */}
			<div>
				<BasicButton
					onClick={(e) => {
						console.log(e.target)
					}}
				>
					BasicButton
				</BasicButton>
				<BasicButton disabled>disabled</BasicButton>
			</div>
			<div>
				<BasicCheckbox>BasicCheckbox </BasicCheckbox>
				<BasicCheckbox defaultChecked>defaultChecked </BasicCheckbox>
				<BasicCheckbox disabled>disabled </BasicCheckbox>
				<BasicCheckbox color="green">green </BasicCheckbox>
			</div>
		</div>
	)
}

export default He
