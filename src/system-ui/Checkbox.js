import { forwardRef } from 'react'
import styled from 'styled-components'

export const Checkbox = forwardRef(function Checkbox(props, ref) {
	const {
		className = '',
		style,
		name,
		label,
		value,
		disabled = false,
		color,
		checked,
		noStyle,
		onChange = () => {},
	} = props

	const handleChange = (e) => {
		onChange(e)
	}

	return (
		<Div
			key={value}
			className={className}
			style={style}
			color={color}
			disabled={disabled}
			noStyle={noStyle}
		>
			<label>
				<input
					ref={ref}
					type="checkbox"
					name={name}
					value={value}
					checked={checked}
					disabled={disabled}
					onChange={handleChange}
				/>

				<span className="active"></span>
				<span className="label">{label}</span>
			</label>
		</Div>
	)
})

const Div = styled.div`
	& {
		display: inline-block;
		box-sizing: border-box;
		color: ${({ disabled }) => (disabled ? '#00000042' : 'unset')};
		label {
			display: flex;
			align-items: center;
			position: relative;

			input {
				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				z-index: 1;

				width: 13px;
				height: 13px;
				margin: 0;
				border: 1px solid;
				border-color: ${({ color, disabled }) =>
					disabled ? '#00000042' : color ? color : '#f5a122'};
				border-radius: 2px;
				cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

				appearance: ${({ noStyle }) =>
					noStyle ? 'auto' : 'none'}!important;

				&:checked ~ span.active {
					transform: scale(1) rotate(40deg);
				}
			}
			span.label {
				margin-left: 18px;
			}
			span.active {
				position: absolute;
				top: calc(50% - 6px);
				left: 5px;
				transform: translateY(-50%);

				width: 5px;
				height: 10px;
				border-width: 0 2px 2px 0;
				border-style: solid;
				border-color: ${({ color, disabled }) =>
					disabled ? '#00000042' : color ? color : '#f5a122'};

				transform: scale(0) rotate(40deg);
				transition: 0.1s all linear;
			}
		}
	}
`
