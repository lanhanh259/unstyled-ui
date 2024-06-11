import { Description, Field, Label, Select } from '@headlessui/react'
import React from 'react'

function Selected() {
	const handleChange = (e) => {
		console.log(e.target.value)
	}
	const handleBlur = (e) => {
		console.log('blur', e.target.value)
	}
	return (
		<Field>
			<Label className="data-[disabled]:opacity-50">Project status</Label>
			<Description className="data-[disabled]:opacity-50">
				This will be visible to clients on the project.
			</Description>
			<Select
				name="status"
				className="data-[disabled]:bg-gray-100"
				onChange={handleChange}
				onBlur={handleBlur}
			>
				<option value="active">Active</option>
				<option value="paused">Paused</option>
				<option value="delayed">Delayed</option>
				<option value="canceled">Canceled</option>
			</Select>
		</Field>
	)
}

export default Selected
