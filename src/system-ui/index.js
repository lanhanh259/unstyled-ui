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
