import React, { useState } from 'react'
import { Checkbox } from './Checkbox'
import { Radio } from './Radio'

function SystemUI() {
	const [orderType, setOrderType] = useState([])

	const handleAddList = (e) => {
		const value = e.target.value
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
			<div>
				<input
					type="checkbox"
					id="vehicle1"
					name="vehicle1"
					value="Bike"
					checked
				/>
				<label for="vehicle1"> buy</label>
				<input
					type="checkbox"
					id="sell"
					name="sell"
					value="Bike"
					checked
				/>
				<label for="sell" style={{ fontSize: '30px' }}>
					{' '}
					sell
				</label>
			</div>
			<Checkbox
				name="list-color"
				label="buy"
				value="buy"
				checked={orderType.includes('buy')}
				// color="purple"
				// style={{ color: 'purple', fontWeight: 700 }}
				onChange={handleAddList}
				noStyle
			/>
			<Checkbox
				name="list-color"
				label="sell"
				value="sell"
				checked={orderType.includes('sell')}
				color="purple"
				style={{ color: 'purple', fontWeight: 700 }}
				onChange={handleAddList}
			/>

			{/* <Radio name="list-color" label="buy" value="buy" checked={true} /> */}
		</div>
	)
}

export default SystemUI
