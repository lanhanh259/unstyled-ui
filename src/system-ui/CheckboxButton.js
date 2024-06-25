import { forwardRef } from 'react'
import styled from 'styled-components'

function CheckboxButton(props, ref) {
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
				{/* <span className="checkbox-outer">
          <span className="checkbox-inner"></span>
        </span> */}

				<Label noStyle={noStyle}>{label}</Label>
			</label>
		</Div>
	)
}

export default forwardRef(CheckboxButton)

const Div = styled.div`
	& {
		display: inline-block;
		vertical-align: top;
		box-sizing: border-box;
		color: ${({ disabled }) => disabled && '#00000042'};

		label {
			display: flex;
			position: relative;

			.checkbox-outer {
				display: ${({ noStyle }) => noStyle && 'none'};

				position: absolute;
				top: 50%;
				left: 0;
				transform: translateY(-50%);
				z-index: 1;

				width: 16px;
				height: 16px;
				margin: 0;
				border: 1px solid;
				border-color: ${({ color, disabled }) =>
					disabled ? '#00000042' : color ? color : '#f5a122'};
				border-radius: 2px;
				cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

				appearance: ${({ noStyle }) =>
					noStyle ? 'auto' : 'none'}!important;
			}
			input {
				display: ${({ noStyle }) => !noStyle && 'none'};
				appearance: ${({ noStyle }) => (noStyle ? 'auto' : 'none')};

				&:checked ~ .checkbox-outer .checkbox-inner {
					transform: translate(-50%, -50%) scale(1) rotate(40deg);
				}
			}

			.checkbox-inner {
				position: absolute;
				top: calc(50% - 1px);
				left: 50%;

				width: 5px;
				height: 11px;
				border-width: 0 2px 2px 0;
				border-style: solid;
				border-color: ${({ color, disabled }) =>
					disabled ? '#00000042' : color ? color : '#f5a122'};

				transform: translate(-50%, -50%) scale(0) rotate(40deg);
				transition: 0.1s all linear;
			}
		}
	}
`
const Label = styled.span`
	& {
		margin-left: ${({ noStyle }) => (noStyle ? '4px' : '20px')};
	}
`
