import { forwardRef } from 'react'
import styled from 'styled-components'

export const Radio2 = forwardRef(function Radio(props, ref) {
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
				<input
					ref={ref}
					type="radio"
					name={name}
					value={value}
					checked={checked}
					disabled={disabled}
					onChange={handleChange}
				></input>
				{!noStyle && (
					<span className="radio-outer">
						<span className="radio-inner"></span>
					</span>
				)}
				<Label noStyle={noStyle}>{label}</Label>
			</label>
		</Div>
	)
})

const Div = styled.div`
	& {
		display: inline-block;
		box-sizing: border-box;
		color: ${({ disabled }) => (disabled ? '#00000042' : 'unset')};
		margin-right: 8px;

		label {
			display: flex;
			align-items: center;
			position: relative;
		}

		.radio-outer {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
			z-index: 1;

			width: 14px;
			height: 14px;
			margin: 0;
			border: 1px solid;
			border-color: ${({ color, disabled }) =>
				disabled ? '#00000042' : color ? color : '#f5a122'};
			border-radius: 50%;
			cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
		}
		input {
			display: ${({ noStyle }) => (!noStyle ? 'none' : 'unset')};
			&:checked ~ .radio-outer .radio-inner {
				transform: translate(-50%, -50%) scale(1);
			}
			appearance: ${({ noStyle }) =>
				noStyle ? 'auto' : 'none'}!important;
		}

		.radio-inner {
			position: absolute;
			top: 50%;
			left: 50%;

			width: 8px;
			height: 8px;
			background: ${({ color, disabled }) =>
				disabled ? '#00000042' : color ? color : '#f5a122'};
			border-radius: 50%;

			transform: translate(-50%, -50%) scale(0);
			transition: 0.1s all linear;
		}
	}
`
const Label = styled.span`
	& {
		margin-left: ${({ noStyle }) => (noStyle ? '4px' : '18px')};
	}
`
