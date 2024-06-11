import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import styled from 'styled-components'
import { forwardRef } from 'react'

// bất tiện
//1. chỉ có group radio, không có radio riêng lẻ
//2. style màu, đặc biệt là hover: phải dùng props riêng
//3. element thuộc kiểu span thay vì input nên không tận dụng được các props sẵn có: disable,...
//4. do phải group nên style trở nên khó hơn : ví dụ muốn các group căn ngang hay dọc, sửa .. => phải thêm props

const CustomRadioGroup = forwardRef(function Button(props, ref) {
	const {
		className,
		style,
		list,
		color,
		disabled,
		noStyle,
		checked,
		onChange,
	} = props

	const handleChange = (e) => {
		!disabled && onChange(e)
	}
	return (
		<Div color={color} disabled={disabled} noStyle={noStyle} ref={ref}>
			<RadioGroup
				className={`radio-group ${className}`}
				style={style}
				value={checked}
				onChange={handleChange}
				aria-label="Server size"
			>
				{list.map((plan, i) => (
					<Field key={i} className="radio-field">
						<Radio value={plan} className="radio ">
							<span className="radio-checked" />
						</Radio>
						<Label className="label">{plan}</Label>
					</Field>
				))}
			</RadioGroup>
		</Div>
	)
})
export default function RadioGroupExample() {
	const plans = ['a', 'b', 'c']

	const [gender, setGender] = useState(plans[0])
	const handleChangeGender = (e) => {
		setGender(e)
	}
	return (
		<div>
			<h1>Radio Group</h1>
			<div>
				<CustomRadioGroup
					checked={gender}
					onChange={handleChangeGender}
					color="red"
					list={plans}
				/>

				<CustomRadioGroup
					checked={gender}
					onChange={handleChangeGender}
					list={plans}
					disabled
				/>
			</div>
		</div>
	)
}
const Div = styled.div`
	.radio-field {
		display: flex;
		align-items: center;
		color: ${({ color, disabled, noStyle }) => disabled && '#00000042'};
		.radio {
			flex-shrink: 0;
			display: inline-block;
			position: relative;
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
			border-radius: 50%;
			margin: 0 4px 0 0;
			cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};

			.radio-checked {
				position: absolute;
				top: 2px;
				left: 2px;
				width: 10px;
				height: 10px;
				background: ${({ color, disabled, noStyle }) =>
					disabled
						? '#00000042'
						: noStyle
						? 'blue'
						: color
						? color
						: '#f5a122'};
				border-radius: 50%;
				transform: scale(0);
				transition: 0.1s all linear;
			}

			&[data-checked] {
				.radio-checked {
					transform: scale(1);
				}
			}
		}
	}
`
