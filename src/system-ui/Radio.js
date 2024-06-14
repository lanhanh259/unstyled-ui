import { forwardRef } from 'react'
import styled from 'styled-components'

export const Radio = forwardRef(function Radio(props, ref) {
	const {
		className = '',
		style,
		name,
		label,
		value,
		disabled = false,
		color,
		checked,
		noStyle = false,
		onChange = () => {},
	} = props

	const handleChange = (e) => {
		onChange(e)
	}

	return (
		<Div
			className={className}
			style={style}
			color={color}
			disabled={disabled}
			noStyle={noStyle}
		>
			<label>
				{label}
				<input
					ref={ref}
					type="radio"
					name={name}
					value={value}
					checked={checked}
					disabled={disabled}
					onChange={handleChange}
				></input>
				{!noStyle && <span></span>}
			</label>
		</Div>
	)
})

const Div = styled.div`
	& {
		position: relative;
		display: inline-block;
		margin-right: 12px;
		box-sizing: border-box;
		color: ${({ disabled }) => (disabled ? '#00000042' : 'unset')};

		label {
			position: relative;
			padding-left: 18px;
		}

		input {
			position: absolute;
			top: 0;
			left: 0;
			width: 13px;
			height: 13px;
			margin: 0;
			border: 1px solid;
			border-color: ${({ color, disabled }) =>
				disabled ? '#00000042' : color ? color : '#f5a122'};
			border-radius: 50%;
			margin: 0 6px 0 0;
			cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

			appearance: ${({ noStyle }) =>
				noStyle ? 'auto' : 'none'}!important;
		}

		span {
			position: absolute;
			top: 3px;
			left: 3px;

			width: 10px;
			height: 10px;
			background: ${({ color, disabled }) =>
				disabled ? '#00000042' : color ? color : '#f5a122'};
			border-radius: 50%;

			transform: scale(0);
			transition: 0.1s all linear;
		}
		input:checked {
			& ~ span {
				transform: scale(1);
			}
		}
	}
`
