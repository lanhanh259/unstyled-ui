import { Checkbox, Field, Label } from '@headlessui/react'
import { useState } from 'react'
import styled from 'styled-components'

function CustomCheckbox({
	className = '',
	color,
	style,
	disabled,
	value,
	checked,
	onChange,
	noStyle,
}) {
	const [enabled, setEnabled] = useState(checked)

	return (
		<DivCheckbox color={color} disabled={disabled} noStyle={noStyle}>
			<Field className={`checkbox-field ${className}`} style={style}>
				<Checkbox
					className="checkbox"
					checked={enabled}
					onChange={(boolean) => {
						// đối số thuộc kiểu boolean
						if (!disabled) {
							onChange(value)
							setEnabled(!enabled)
						}
					}}
				>
					<span className="checkbox-checked" />
				</Checkbox>
				<Label className="label">{value}</Label>
			</Field>
		</DivCheckbox>
	)
}

export default function CustomCheckboxExample() {
	const [orderType, setOrderType] = useState(['buy'])

	const handleAddList = (value) => {
		const myOrder = [...orderType]
		if (myOrder.includes(value)) {
			// Nếu giá trị đã tồn tại trong mảng, loại bỏ nó
			setOrderType(myOrder.filter((item) => item !== value))
		} else {
			// Nếu giá trị không tồn tại trong mảng, thêm nó vào mảng
			setOrderType([...myOrder, value])
		}
	}

	return (
		<div>
			<CustomCheckbox
				value="buy"
				checked={orderType.includes('buy')}
				onChange={handleAddList}
			/>
			<CustomCheckbox
				value="sell"
				checked={orderType.includes('sell')}
				onChange={handleAddList}
				disabled
			/>

			<CustomCheckbox
				value="sell"
				checked={orderType.includes('sell')}
				onChange={handleAddList}
				color="hotpink"
			/>

			<CustomCheckbox
				value="sell"
				checked={orderType.includes('sell')}
				onChange={handleAddList}
				style={{ color: 'hotpink' }}
			/>
		</div>
	)
}

const DivCheckbox = styled.div`
	& {
		.checkbox-field {
			position: relative;
			display: flex;
			align-items: center;
			margin-right: 12px;
			color: ${({ color, disabled, noStyle }) => disabled && '#00000042'};

			.checkbox {
				display: inline-block;
				position: absolute;
				width: 16px;
				height: 16px;
				border: 1px solid;
				border-color: ${({ color, disabled, noStyle }) =>
					disabled
						? '#00000042'
						: noStyle
						? 'blue'
						: color
						? color
						: '#f5a122'};
				border-radius: 5px;
				cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

				.checkbox-checked {
					position: absolute;
					top: 2px;
					left: 5px;
					width: 5px;
					height: 10px;
					border-width: 0 2px 2px 0;
					border-style: solid;
					border-color: ${({ color, disabled, noStyle }) =>
						disabled
							? '#00000042'
							: noStyle
							? 'blue'
							: color
							? color
							: '#f5a122'};

					transform: scale(0) rotate(40deg);
					transition: 0.1s all linear;
				}
				&:focus-visible {
					outline: none;
				}
				&[data-checked] {
					.checkbox-checked {
						transform: scale(1) rotate(40deg);
					}
				}
			}
			.label {
				padding-left: 22px;
			}
		}
	}
`
